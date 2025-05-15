import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyApplications = () => {
  const { user } = useAuth();
  const [application, setApplication] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/service-application?email=${user.email}`)
        .then(res => {
          if (Array.isArray(res.data)) {
            setApplication(res.data);
          } else {
            setApplication([]);
            console.error('Unexpected response:', res.data);
          }
        })
        .catch(err => {
          console.error('Error fetching applications:', err);
        });
    }
  }, [user?.email, axiosSecure]);

  const handleDetails = (app) => {
    Swal.fire({
      title: app.serviceTitle,
      html: `
        <p><strong>Company:</strong> ${app.companyName}</p>
        <p><strong>Category:</strong> ${app.category}</p>
        <p><strong>Status:</strong> ${app.status || 'Pending'}</p>
      `,
      imageUrl: app.serviceImage,
      imageWidth: 300,
      imageAlt: app.serviceTitle,
      confirmButtonText: 'Close'
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won’t be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/service-application/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              setApplication(prev => prev.filter(app => app._id !== id));
              Swal.fire('Deleted!', 'Application has been removed.', 'success');
            }
          })
          .catch(err => {
            console.error('Delete failed:', err);
            Swal.fire('Error', 'Something went wrong while deleting.', 'error');
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold text-center mb-6">
        My Applications ({application.length})
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {application.map(app => (
          <div key={app._id} className="card bg-base-100 shadow-md border">
            <figure className="px-4 pt-4">
              <img
                src={app.serviceImage}
                alt={app.serviceTitle}
                className="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">{app.serviceTitle}</h2>
              <p className="text-sm text-gray-500">{app.companyName}</p>
              <p className="text-sm font-semibold text-primary">{app.category}</p>
              <div className="mt-4 flex justify-center gap-4">
                <button
                  onClick={() => handleDetails(app)}
                  className="btn btn-info btn-sm"
                >
                  Details
                </button>
                <button
                  onClick={() => handleDelete(app._id)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;

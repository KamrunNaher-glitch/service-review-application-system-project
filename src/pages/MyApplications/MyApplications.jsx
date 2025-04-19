import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const MyApplications = () => {
  const { user } = useAuth();
  const [application, setApplication] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service-application?email=${user.email}`)
      .then(res => res.json())
      .then(data => setApplication(data));
  }, [user.email]);

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
        fetch(`http://localhost:5000/service-application/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setApplication(prev => prev.filter(app => app._id !== id));
              Swal.fire('Deleted!', 'Application has been removed.', 'success');
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold text-center mb-6">My Applications ({application.length})</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {application.map(app => (
          <div key={app._id} className="card bg-base-100 shadow-md border">
            <figure className="px-4 pt-4">
              <img src={app.serviceImage} alt={app.serviceTitle} className="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">{app.serviceTitle}</h2>
              <p className="text-sm text-gray-500">{app.companyName}</p>
              <p className="text-sm font-semibold text-primary">{app.category}</p>
              <div className="mt-4 flex justify-center gap-4">
                <button onClick={() => handleDetails(app)} className="btn btn-info btn-sm">Details</button>
                <button onClick={() => handleDelete(app._id)} className="btn btn-error btn-sm">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;

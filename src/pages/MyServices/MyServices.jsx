import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyServices = () => {
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/services?email=${user.email}`)
        .then(res => {
          if (Array.isArray(res.data)) {
            setServices(res.data);
          } else {
            console.error('Unexpected response:', res.data);
            setServices([]);
          }
        })
        .catch(err => {
          console.error('Error fetching services:', err);
          setServices([]);
        });
    }
  }, [user?.email, axiosSecure]);

  return (
    <div className="px-4 py-6 md:px-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
        My Posted Services: {services.length}
      </h2>

      <div className="w-full overflow-x-auto">
        <table className="table table-zebra w-full min-w-[600px] text-sm md:text-base">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Company Name</th>
              <th>Service Title</th>
              <th>Category</th>
              <th>Applications</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={service._id}>
                <td>{index + 1}</td>
                <td className="whitespace-nowrap">{service.companyName}</td>
                <td className="whitespace-nowrap">{service.serviceTitle}</td>
                <td className="whitespace-nowrap">{service.category}</td>
                <td className="text-center">{service.applicationCount || 0}</td>
                <td>
                  <Link to={`/viewApplications/${service._id}`}>
                    <button className="btn btn-sm btn-outline btn-primary">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyServices;

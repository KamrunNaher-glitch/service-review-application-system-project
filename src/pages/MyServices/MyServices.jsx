import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyServices = () => {
  const [services, setServices] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/service-application?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('Applications:', data);
          setServices(data);
        });
    }
  }, [user?.email]);

  return (
    <div className="p-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
        My Posted Services: {services.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th className="text-sm md:text-base">Company Name</th>
              <th className="text-sm md:text-base">Service Title</th>
              <th className="text-sm md:text-base">Category</th>
              <th className="text-sm md:text-base">Applications</th>
              <th className="text-sm md:text-base">View</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="whitespace-nowrap">{service.companyName}</td>
                <td className="whitespace-nowrap">{service.serviceTitle}</td>
                <td className="whitespace-nowrap">{service.category}</td>
                <td className="text-center">{service.applicationCount}</td>
                <td>
                  <Link to={`/viewApplications/${service.service_id}`}>
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

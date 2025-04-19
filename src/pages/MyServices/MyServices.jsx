import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyServices = () => {
    const [services,setServices] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        if (user?.email) {
          fetch(`http://localhost:5000/service-application?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
              console.log('Applications:', data); // Should show serviceTitle
              setServices(data);
            });
        }
      }, [user?.email]);
      
    return (
        <div>
            <h2>My Posted Services: {services.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Company Name</th>
        <th>Service Title</th>
        <th>category</th>
        <th>Service Count</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        services.map((service,index) =><tr>
            <th>{index+1}</th>
            <td>{service.companyName}</td>
            <td>{service.serviceTitle}</td>
            <td>{service.category}</td> 
            <td>{service.applicationCount}</td> 
            <td>
              <Link to={`/viewApplications/${service.service_id}`}>

              <button className='btn btn-link'>View</button>
              </Link>
            </td>
          </tr>)
      }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyServices;


import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
    const {user} = useAuth();
    const [application,setApplication] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/service-application?email=${user.email}`)
        .then(res => res.json())
        .then(data =>setApplication(data))
    },[user.email])
    return (
        <div>
            <h3>My Posted Service: {application.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
           application.map(app=><tr key={app._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={app.serviceImage}
                      alt="" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{app.serviceTitle}</div>
                  <div className="text-sm opacity-50">{app.companyName}</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>) 
        }

      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
     
      
    </tbody>
   
  </table>
</div>
 
        </div>
    );
};

export default MyApplications;


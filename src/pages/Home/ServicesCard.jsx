import React from 'react';
import Swal from 'sweetalert2';
import { FaDollarSign } from 'react-icons/fa';
import { TbWorldCheck } from "react-icons/tb";
import { Link } from 'react-router-dom';

const ServicesCard = ({ service, onDelete }) => {
  const { _id, serviceImage, serviceTitle, companyName, website, description, category, price, userEmail } = service;

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`https://service-review-application-system-project-server.vercel.app/services/${_id}`, {
          method: 'DELETE',
        });

        const data = await res.json();

        if (data.deletedCount > 0) {
          onDelete(_id); // remove from local state
          Swal.fire('Deleted!', 'The service has been deleted.', 'success');
        } else {
          Swal.fire('Oops!', 'Failed to delete the service.', 'error');
        }
      } catch (err) {
        console.error(err);
        Swal.fire('Error', 'Something went wrong', 'error');
      }
    }
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className='flex gap-2 m-2'>
        <figure>
          <img className='w-16' src={serviceImage} alt="" />
        </figure>
        <div>
          <h4 className='text-2xl'>{companyName}</h4>
          <p className='flex gap-2 items-center'><TbWorldCheck />{website}</p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">{serviceTitle}</h2>
        <div className="badge badge-secondary">{category}</div>
        <p>{description}</p>
        <p>{userEmail}</p>
        <p><FaDollarSign className="inline" /> {price}</p>

        <div className="card-actions justify-between mt-2">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary">Add Service</button>
          </Link>
          <button onClick={handleDelete} className="btn btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;



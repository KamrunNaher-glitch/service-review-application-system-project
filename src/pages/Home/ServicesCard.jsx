import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { TbWorldCheck } from "react-icons/tb";
import { Link } from 'react-router-dom';

const ServicesCard = ({ service, onDelete }) => {
  const { _id, serviceImage, serviceTitle, companyName, website, description, category, price, userEmail } = service;

  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this service?');
    if (confirm) {
      try {
        const res = await fetch(`http://localhost:5000/services/${_id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
          onDelete(_id); // Inform parent component to remove from local state
        } else {
          alert('Failed to delete service');
        }
      } catch (err) {
        console.error(err);
        alert('An error occurred');
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

import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { TbWorldCheck } from "react-icons/tb";
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const {_id, serviceImage, serviceTitle, companyName, website, description, category, price, addedDate, userEmail } = service;


    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <div className='flex gap-2 m-2'>
                <figure>
                    <img className='w-16'
                        src={serviceImage}
                        alt="" />
                </figure>
                <div>
                    <h4 className='text-2xl'>{companyName}</h4>
                    <p className='flex gap-2 items-center '> <TbWorldCheck></TbWorldCheck>{website}</p>
                    {/* <p>{serviceTitle}</p> */}
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{serviceTitle}</h2>
                    <div className="badge badge-secondary">{category}</div>  
                <p>{description}</p>
                <p>{userEmail}</p>
                <p>${price}</p>
                <div className="card-actions mt-2 ">
                   <Link to={`/services/${_id}`}>
                   <button className="btn btn-primary">Add Service</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;


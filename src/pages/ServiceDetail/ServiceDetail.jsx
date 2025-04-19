import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const { _id, serviceImage, serviceTitle, companyName, website, description, category, price, addedDate, userEmail } = useLoaderData();


    return (
        <div className='m-10'>
            <h2 className='text-3xl'>Service Deatils :{serviceTitle}</h2>
            <p>Apply For : {companyName}</p>
            <p>{addedDate}</p>
            <Link to={`/ServiceApply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;
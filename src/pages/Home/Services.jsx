import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data =>{
            setServices(data)
        })
                 
    },[])
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-3'>Our Services </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                  services.map(service =><ServicesCard key={service._id} service={service}></ServicesCard>)  
                }
            </div>
        </div>
    );
};

export default Services;


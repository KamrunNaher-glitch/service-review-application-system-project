import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
    }, []);

    // Handle delete from child component
    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this service?');
        if (!confirmDelete) return;

        fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    // Remove the deleted service from state
                    setServices(prevServices => prevServices.filter(service => service._id !== id));
                } else {
                    alert('Delete failed');
                }
            })
            .catch(error => {
                console.error('Error deleting service:', error);
                alert('Something went wrong');
            });
    };

    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-3'>Our Services</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    services.map(service =>
                        <ServicesCard
                            key={service._id}
                            service={service}
                            onDelete={handleDelete}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Services;

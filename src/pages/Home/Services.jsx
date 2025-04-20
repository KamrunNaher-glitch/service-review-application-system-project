import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTrigger, setSearchTrigger] = useState(false); // for manual button click

  useEffect(() => {
    const fetchServices = async () => {
      try {
        let url = 'http://localhost:5000/services';
        if (searchTerm) {
          url += `?search=${encodeURIComponent(searchTerm)}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error('Failed to fetch services:', err);
      }
    };

    fetchServices();
  }, [searchTrigger]); // trigger refetch when user clicks search

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTrigger(prev => !prev); // toggle to trigger useEffect
  };

  return (
    <div>
      <h2 className='text-3xl font-bold text-center mb-3'>Our Services</h2>

      <form onSubmit={handleSearch} className='flex justify-center mb-5'>
        <input
          type="text"
          placeholder="Search by title, company, or category"
          className="input input-bordered w-full max-w-xs mr-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          services.map(service =>
            <ServicesCard
              key={service._id}
              service={service}
              onDelete={(id) =>
                setServices(prev => prev.filter(s => s._id !== id))
              }
            />
          )
        }
      </div>
    </div>
  );
};

export default Services;





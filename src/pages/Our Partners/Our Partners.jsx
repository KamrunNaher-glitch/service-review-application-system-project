import React from 'react';

const partners = [
  {
    name: 'TechBridge Solutions',
    logo: 'https://i.ibb.co.com/Kz8BZJHc/images-1.png',
    description: 'Provided end-to-end infrastructure support and security auditing for our system.',
  },
  {
    name: 'DesignHive',
    logo: 'https://i.ibb.co.com/6RmDWgxq/images-2.png',
    description: 'Collaborated on crafting intuitive UI/UX designs for the application.',
  },
  {
    name: 'CodeCrafters Inc.',
    logo: 'https://i.ibb.co.com/60CsSPvh/images-3.jpg',
    description: 'Led the backend development and API integrations for seamless data handling.',
  },
  {
    name: 'MarketGurus',
    logo: 'https://i.ibb.co.com/K11Z9SW/images-3.png',
    description: 'Supported our launch campaign with SEO, branding, and digital marketing strategies.',
  },
];

const Partners = () => {
  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Partners</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <div key={index} className="card bg-base-200 shadow-md p-4 items-center text-center">
              <img src={partner.logo} alt={partner.name} className="w-24 h-24 object-contain mb-4" />
              <h3 className="text-xl font-semibold">{partner.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

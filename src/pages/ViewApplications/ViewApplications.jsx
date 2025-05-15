import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewApplication = () => {
  const { service_id} = useParams();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await fetch(`http://localhost:5000/service-application/${service_id}`, {
          credentials: 'include',
        });

        if (!res.ok) {
          const message = await res.text();
          throw new Error(message || 'Failed to fetch application');
        }

        const data = await res.json();
        setApplication(data);
      } catch (err) {
        console.error('❌ Error fetching application:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [service_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600 font-bold">Error: {error}</div>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <img src={application.serviceImage} alt="Service" className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-xl font-bold">{application.serviceTitle}</h2>
      <p><strong>Company:</strong> {application.companyName}</p>
      <p><strong>Category:</strong> {application.category}</p>
      <p><strong>Status:</strong> {application.status}</p>
      <p><strong>Applicant Email:</strong> {application.applicant_email}</p>
      <p><strong>LinkedIn:</strong> <a href={application.linkedIn} className="text-blue-500">{application.linkedIn}</a></p>
      <p><strong>GitHub:</strong> <a href={application.github} className="text-blue-500">{application.github}</a></p>
      <p><strong>Resume:</strong> <a href={application.resume} className="text-blue-500">{application.resume}</a></p>
    </div>
  );
};

export default ViewApplication;




import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e, id) => {
        const data = { status: e.target.value };

        fetch(`http://localhost:5000/service-application/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status Has Been Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Applications for this Service: {applications.length}
            </h2>

            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="table w-full text-sm md:text-base">
                    {/* Table Head */}
                    <thead className="bg-base-200">
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {applications.map((app, index) => (
                            <tr key={app._id}>
                                <td>{index + 1}</td>
                                <td className="break-all">{app.applicant_email}</td>
                                <td className="whitespace-nowrap">{app.serviceTitle || 'N/A'}</td>
                                <td>
                                    <select
                                        onChange={(e) => handleStatusUpdate(e, app._id)}
                                        defaultValue={app.status || 'Change Status'}
                                        className="select select-bordered select-xs md:select-sm w-full max-w-xs"
                                    >
                                        <option disabled>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;


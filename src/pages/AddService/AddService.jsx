import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AddService = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddService = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(initialData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your service has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/myservices');
        }
      });
  };

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 bg-base-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Post a New Service</h2>

        <form onSubmit={handleAddService} className="space-y-4">
          {/* Service Title */}
          <div>
            <label className="label">
              <span className="label-text">Service Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Service Title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Service Description */}
          <div>
            <label className="label">
              <span className="label-text">Service Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              name="description"
              rows={4}
              placeholder="Describe your service"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Website */}
          <div>
            <label className="label">
              <span className="label-text">Website</span>
            </label>
            <input
              type="text"
              name="website"
              placeholder="Website URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Service Category"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* User Email */}
          <div>
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              name="userEmail"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              readOnly
              required
            />
          </div>

          {/* Service Image */}
          <div>
            <label className="label">
              <span className="label-text">Service Image URL</span>
            </label>
            <input
              type="url"
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="label">
              <span className="label-text">Service Type</span>
            </label>
            <select
              name="type"
              defaultValue=""
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>
                Pick a Service Type
              </option>
              <option>Design</option>
              <option>HR Services</option>
              <option>Development</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Service Price"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button type="submit" className="btn btn-primary w-full">
              Submit Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;

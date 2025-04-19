
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddService = () => {
    const {user} = useAuth();



    const handleAddService = e =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);
        fetch('http://localhost:5000/services',{
           method: 'POST' ,
           headers: {
            'content-type' : 'application/json'
           },
           body: JSON.stringify(initialData),
        })
        .then(res => res.json())
        .then(data => {
             if(data.insertedId){
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your service has been saved",
                                showConfirmButton: false,
                                timer: 1500
                              });
                             navigate('/myservices') 
                          }
        })


    }
    return (
        <div>
            <h2 className='text-3xl font-bold'>Post a new Service</h2>
            <form onSubmit={handleAddService} className="card-body">
                {/* Service Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Service Title" className="input input-bordered" required />
                </div>
                {/* Service Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Description</span>
                    </label>
                    
                    <textarea className="textarea textarea-bordered" name='description' placeholder="Service Description"></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">companyName</span>
                    </label>
                    <input type="text" name='companyName' placeholder="companyName" className="input input-bordered" required />

                </div>
                {/* website */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Website</span>
                    </label>
                    <input type="text" name='website' placeholder="Website" className="input input-bordered" required />
                </div>
                {/* user Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <input type="text" defaultValue={user?.email}  name='userEmail' placeholder="User Email" className="input input-bordered" required />
                </div>
                {/* Company Logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">serviceImage</span>
                    </label>
                    <input type="url" name='image' placeholder="serviceImage" className="input input-bordered" required />
                </div>
                {/* Service Type  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Type</span>
                    </label>
                    <select defaultValue="Pick a Service Type" className="select select-ghost w-full max-w-xs">
                        <option disabled >Pick a Service Type</option>
                        <option>Design</option>
                        <option>HR Services</option>
                        <option>Development</option>
                    </select>
                </div>
                {/* Price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name='price' placeholder="servicePrice" className="input input-bordered" required />
                </div>
                {/* Submit Button  */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;

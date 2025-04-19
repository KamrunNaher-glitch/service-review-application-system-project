import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import resisterLottiData from '../../assets/lotti/register.json';
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../Home/shared/SocialLogin';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Lottie Animation */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <p className="py-6 text-sm sm:text-base">
            At ScoreLoop, we believe in the power of shared experiences. Our platform is designed to help users
            discover trustworthy services, contribute meaningful reviews, and make informed decisions.
          </p>
          <Lottie animationData={resisterLottiData} className="w-full max-w-xs mx-auto" />
        </div>

        {/* Register Form */}
        <div className="card bg-base-100 w-full max-w-sm mx-auto lg:w-96 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold ml-8 mt-4 text-center lg:text-left">
            Register Now!
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Register</button>
            </div>
          </form>
          <div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

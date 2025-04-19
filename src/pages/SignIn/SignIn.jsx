import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import login from '../../assets/lotti/signIn.json';
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../Home/shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Password Validation
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const minLength = password.length >= 6;

    if (!uppercase || !lowercase || !minLength) {
      let message = 'Password must:\n';
      if (!uppercase) message += '- Include at least one UPPERCASE letter\n';
      if (!lowercase) message += '- Include at least one lowercase letter\n';
      if (!minLength) message += '- Be at least 6 characters long';
      Swal.fire({
        icon: 'error',
        title: 'Password Error',
        text: message,
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: `Welcome, ${result.user.email}`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(from);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-6 px-4">
        {/* Lottie Animation */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <Lottie animationData={login} className="w-full max-w-xs mx-auto" />
          <p className="py-6 text-sm sm:text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>

        {/* Sign-In Form */}
        <div className="card bg-base-100 w-full max-w-sm mx-auto lg:w-96 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold ml-8 mt-4 text-center lg:text-left">Login Now!</h1>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
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
              <button className="btn btn-primary w-full">Login</button>
            </div>
          </form>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext/AuthContext';
import logo from '../../../assets/service-review.png';

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('successful sign out');
      })
      .catch((error) => {
        console.log('failed to sign out');
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
      <NavLink to="/myapplications">My Applications</NavLink>

      </li>
      <li>
        <NavLink to="addService">Add Service</NavLink>
      </li>
      <li>
        <NavLink to="/myservices">My Services</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      {/* Navbar Start (Mobile/Tabs) */}
      <div className="navbar-start">
        {/* Dropdown Menu on Mobile */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* Logo */}
        <a className="btn btn-ghost text-xl flex items-center gap-2">
          <img className="w-12" src={logo} alt="Logo" />
          <h3 className="text-3xl">ScoreLoop</h3>
        </a>
      </div>

      {/* Navbar Center (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End (User Authentication) */}
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="btn btn-ghost">
              Register
            </Link>
            <Link to="/signIn">
              <button className="btn">Sign In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;

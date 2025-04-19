import React from 'react';
import logo from '../../../assets/service-review.png';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-4">
      {/* Top Section: Grid-based layout for nav */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Logo + Description */}
        <aside className="flex flex-col items-start">
          <img src={logo} alt="ScoreLoop Logo" className="w-16 mb-2" />
          <p className="text-sm">
            <span className="font-bold">ScoreLoop Ltd.</span><br />
            Providing reliable service review solutions since 1992
          </p>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Add Services</a><br />
          <a className="link link-hover">Write Reviews</a><br />
          <a className="link link-hover">Explore Feedback</a><br />
          <a className="link link-hover">Business Support</a>
        </nav>

        {/* Company Info */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a> <br />
          <a className="link link-hover">Contact</a> <br />
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press Kit</a>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of Use</a><br />
            <a className="link link-hover">Privacy Policy</a> <br />
            <a className="link link-hover">Cookie Policy</a>
        </nav>
      </div>

      {/* Bottom Section: Centered on all devices */}
      <div className="footer footer-center bg-base-200 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} —
            All rights reserved by <span className="font-semibold">ScoreLoop Ltd.</span>
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;

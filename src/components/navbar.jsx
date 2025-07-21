
import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top ">
        <div className="container">
          <a className="navbar-brand fw-bold text-uppercase" href="#">
            NEWTECH ENTERPRICE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="blog-in">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="services">
               Services
                </a>
              </li>
            
            
            </ul>

            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="btn btn-outline-light" href="contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

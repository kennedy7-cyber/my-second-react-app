
import React from "react";

const Navbar = () => {
  return (
    <header className=" fixed-top">
      {/* Top info bar (optional for contact info or tagline) */}
      <div className="bg-light border-bottom py-1 text-center small text-muted">
        Trusted Hardware Supplier – Nationwide Delivery
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-uppercase" href="/">
            NewTech Enterprise
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog-in">Blogs</a>
              </li>
            </ul>

            <div className="d-flex">
              <a className="btn btn-outline-light rounded-pill px-4" href="/contact-us">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Offset space for fixed navbar */}
      <div style={{ height: "70px" }}></div>
    </header>
  );
};

export default Navbar;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 mt-5 shadow-lg overflow-hidden">
      <div className="container">
        {/* Logo Row */}
        <div className="row pb-4 border-bottom border-secondary align-items-center">
          <div className="col-md-4 mb-3">
            <img
              // src="https://st2.depositphotos.com/5270307/10228/v/950/depositphotos_102286534-stock-illustration-new-tech-logo-template-design.jpg"
              alt="NewTech Enterprise Logo"
              width="80"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="row pt-4 pb-5 border-bottom border-secondary">
          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-warning">📍 Contact Us</h5>
            <p className="small lh-lg">
              <strong>Phone:</strong> <br />
              <a href="tel:+254758849440" className="text-light text-decoration-none">0758 849 440</a><br />
              <strong>Email:</strong> <br />
              <a href="mailto:email@newtech.co.ke" className="text-light text-decoration-none">email@newtech.co.ke</a><br />
              <strong>Location:</strong> Wangige – Kabete, Kenya
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-warning">🔗 Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.path}
                    className="text-light text-decoration-none"
                    style={{ transition: "color 0.3s" }}
                    onMouseOver={(e) => e.target.style.color = "#ffc107"}
                    onMouseOut={(e) => e.target.style.color = "#ffffff"}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-warning">📬 Subscribe</h5>
            <form className="d-flex mb-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
                required
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
            <div className="d-flex gap-3">
              <img src="badge1.png" alt="Award badge" width="50" height="50" />
              <img src="badge2.png" alt="Certification badge" width="50" height="50" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-secondary py-3 small">
          &copy; {new Date().getFullYear()} <strong>NewTech Enterprise</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

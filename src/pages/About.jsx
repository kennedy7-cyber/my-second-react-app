import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">
            About Newtech Enterprise Hardware
          </h1>
          <p className="lead">
            Supplying innovation and reliability in every bolt and brick.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://media.istockphoto.com/id/2162666018/photo/hand-tools-and-workbench-in-carpentry-workshop.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ek1Qw0yW_qr6SLFUFQ6RP8uTw_4XMk1breJNJIbpEzs="
                alt="Hardware tools"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Who We Are</h2>
              <p>
                Newtech Enterprise Hardware is a leading provider of quality
                building materials, tools, plumbing and electrical supplies in
                Kenya. We’ve served contractors, homeowners, and developers
                since 2010 — helping them build with confidence.
              </p>
              <p>
                Our strength lies in reliable stock, fair pricing, and expert
                service you can trust every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Commitment</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">Our Mission</h5>
                  <p className="card-text">
                    To provide reliable, affordable hardware and construction
                    solutions that empower people to build stronger homes,
                    businesses, and communities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">Our Vision</h5>
                  <p className="card-text">
                    To be the most trusted hardware brand in East Africa — known
                    for quality, service, and innovation in every delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">Our Values</h5>
                  <ul className="list-unstyled">
                    <li>✔ Integrity</li>
                    <li>✔ Reliability</li>
                    <li>✔ Innovation</li>
                    <li>✔ Customer Focus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Meet Our Team</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-3">
              <div className="card border-0 shadow h-100">
                <img
                  src="https://randomuser.me/api/portraits/men/57.jpg"
                  className="card-img-top"
                  alt="Team member"
                />
                <div className="card-body">
                  <h5 className="card-title">James Mwangi</h5>
                  <p className="card-text text-muted">Founder & Director</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow h-100">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="card-img-top"
                  alt="Team member"
                />
                <div className="card-body">
                  <h5 className="card-title">samidoh</h5>
                  <p className="card-text text-muted">Operations Manager</p>
                </div>
              </div>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Floating Social Media Buttons */}
      <div
        style={{
          position: "fixed",
          right: "20px",
          top: "45%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "10px", // also reduced the gap slightly
          zIndex: 1000,
        }}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/254758849440"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
            alt="WhatsApp"
            style={{ width: "20px", height: "20px" }}
          />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/yourplumbingpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
            alt="Instagram"
            style={{ width: "20px", height: "20px" }}
          />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/yourplumbingpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt="Facebook"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;

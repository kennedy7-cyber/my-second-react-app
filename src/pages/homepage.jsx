import React from "react";
import { Link } from "react-router-dom";

const carouselSlides = [
  {
    img: "https://media.istockphoto.com/id/1943217822/photo/plumbers-tool-bag-on-kitchen-counter-near-sink-space-for-text.jpg?s=612x612&w=0&k=20&c=8rGIWM7usCVJhU4sHkhR3Y8xLUhG6QxtDlFEoJWc1RU=",

    alt: "carpentry-workshop",
    title: "Welcome to our solutions",
    text: `We’re delighted to introduce you to our suite of services. From innovative strategies to seamless support, we’re here to empower your success. Let’s explore how we can make a meaningful impact together.`,
    interval: 10000,
    boldText: false,
  },
  {
    img: "https://media.istockphoto.com/id/1138365767/photo/paintbrushes-of-different-size-and-paint-can.jpg?s=612x612&w=0&k=20&c=SyA25O8xBGnR92tfblPS94LcHI8M1TnU5YDVBwulyaI=",

    alt: "construction-mall",
    title: "Reliable services",
    text: "“Dependable quality, every time. Your satisfaction is our guarantee.”",
    interval: 2000,
    boldText: true,
  },
  {
    img: "https://media.istockphoto.com/id/821134188/photo/construction-iron.jpg?s=612x612&w=0&k=20&c=ocX4GvLL3o6p2uVwJd51_VSPx_kec6SdNrn8bVf-JL4=",
    alt: "construction-framing",
    title: "Smart & Scalable",
    text: "Designed with intelligence, built to grow — delivering flexible solutions today and evolving seamlessly with tomorrow’s ambitions.",
    interval: null,
    boldText: false,
  },
];

const Homepage = () => {
  return (
    <div className="overflow-hidden ">

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {carouselSlides.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={item.img} alt={item.title} />
              <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center text-center">
    <h5>{item.title}</h5>
    <p>{item.text}</p>
  </div>
            </div>
          ))}
        </div>
        {/* controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          {`< `}
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          {`>`}
        </button>
      </div>
      

      <div className="container pb-5">
        <h1 className="text-center py-5">Explore the world with us</h1>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1580377968131-bac075a9a3d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsdW1iaW5nJTIwc29sdXRpb24lMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D"
                className="card-img-top"
                alt="Plumbing Service"
              />
              <div className="card-body">
                <h5 className="card-title">Plumbing Services</h5>
                <p className="card-text">
                  Expert plumbing solutions: installations, repairs, leak
                  detection, and maintenance.
                </p>
              </div>
              <div className="card-footer"></div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://media.istockphoto.com/id/1469656864/photo/electrician-engineer-uses-a-multimeter-to-test-the-electrical-installation-and-power-line.webp?a=1&b=1&s=612x612&w=0&k=20&c=eDdOgrMY7RUNadSSchLwiaDGzHV8vUEt0soJ0Q0Fltk="
                className="card-img-top"
                alt="Electrical Service"
              />
              <div className="card-body">
                <h5 className="card-title">Electrical Services</h5>
                <p className="card-text">
                  From rewiring to lighting installation, our certified
                  electricians ensure safety and quality.
                </p>
              </div>
              <div className="card-footer"></div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1680503397107-475907e4f3e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlc3xlbnwwfHwwfHx8MA%3D%3D"
                className="card-img-top"
                alt="Furniture Service"
              />
              <div className="card-body">
                <h5 className="card-title">Furniture Services</h5>
                <p className="card-text">
                  Assembly, repair, and finishing of all furniture
                  types—delivered with craftsmanship.
                </p>
              </div>
              <div className="card-footer"></div>
            </div>
          </div>
        </div>

        <div className="text-center p-lg-5"></div>
        <Link to="/services">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition bg-success justify-content-center">
            Explore Our Services
          </button>
        </Link>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* Client 1 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="rounded-circle mb-3"
                  alt="Client 1"
                />
                <h5 className="card-title">grace joy</h5>
                <p className="card-text">
                  "NewTech Hardware provided excellent customer service and
                  quality tools for our construction project. Highly
                  recommended!"
                </p>
              </div>
            </div>
          </div>

          {/* Client 2 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/15.jpg"
                  className="rounded-circle mb-3"
                  alt="Client 2"
                />
                <h5 className="card-title">Andrew mbugua</h5>
                <p className="card-text">
                  "I loved the fast delivery and reliable hardware materials.
                  NewTech is my go-to hardware shop."
                </p>
              </div>
            </div>
          </div>

          {/* Client 3 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/57.jpg"
                  className="rounded-circle mb-3"
                  alt="Client 3"
                />
                <h5 className="card-title">Peter Mwangi</h5>
                <p className="card-text">
                  "Affordable prices and top-quality items. NewTech Hardware is
                  the best in town!"
                </p>
              </div>
            </div>
          </div>

          {/* Client 4 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="rounded-circle mb-3"
                  alt="Client 4"
                />
                <h5 className="card-title">kennitoh</h5>
                <p className="card-text">
                  "From plumbing to electrical supplies, everything I needed was
                  available. NewTech made my project seamless."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Homepage;

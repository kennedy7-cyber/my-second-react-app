import React from "react";
import { Link } from "react-router-dom"; // Make sure you're using react-router-dom

const Homepage = () => {
  return (
    <div className="overflow-hidden">
      <div className="d-block w-100 vh-100 h-100 overflow-hidden">
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src="https://media.istockphoto.com/id/2162666018/photo/hand-tools-and-workbench-in-carpentry-workshop.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ek1Qw0yW_qr6SLFUFQ6RP8uTw_4XMk1breJNJIbpEzs="
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="https://media.istockphoto.com/id/1840468645/photo/tool-display-at-a-hardware-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=kWm8_7Eyj8YdfHeZEde5cx1EUtRbMBog_Q6WgLfbJnM="
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="
                https://media.istockphoto.com/id/1646081497/photo/young-woman-client-choosing-sanitary-taps-standing-with-catalog-near-the-showcase-of-plumbing.webp?a=1&b=1&s=612x612&w=0&k=20&c=2qEfV5PwWN4UI8WpJlayaXOx3HfDTl868uq3sBGx9Hg="
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="container py-5">
        <h1 className="text-center py-5">Explore the world with us</h1>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100">
              <img
                src="https://images.unsplash.com/photo-1580377968131-bac075a9a3d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsdW1iaW5nJTIwc29sdXRpb24lMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D"
                class="card-img-top"
                alt="Plumbing Service"
              />
              <div class="card-body">
                <h5 class="card-title">Plumbing Services</h5>
                <p class="card-text">
                  Expert plumbing solutions: installations, repairs, leak
                  detection, and maintenance.
                </p>
              </div>
              <div class="card-footer"></div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <img
                src="https://media.istockphoto.com/id/1469656864/photo/electrician-engineer-uses-a-multimeter-to-test-the-electrical-installation-and-power-line.webp?a=1&b=1&s=612x612&w=0&k=20&c=eDdOgrMY7RUNadSSchLwiaDGzHV8vUEt0soJ0Q0Fltk="
                class="card-img-top"
                alt="Electrical Service"
              />
              <div class="card-body">
                <h5 class="card-title">Electrical Services</h5>
                <p class="card-text">
                  From rewiring to lighting installation, our certified
                  electricians ensure safety and quality.
                </p>
              </div>
              <div class="card-footer"></div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <img
                src="https://images.unsplash.com/photo-1680503397107-475907e4f3e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlc3xlbnwwfHwwfHx8MA%3D%3D"
                class="card-img-top"
                alt="Furniture Service"
              />
              <div class="card-body">
                <h5 class="card-title">Furniture Services</h5>
                <p class="card-text">
                  Assembly, repair, and finishing of all furniture
                  types—delivered with craftsmanship.
                </p>
              </div>
              <div class="card-footer"></div>
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

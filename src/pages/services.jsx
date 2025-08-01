import React from "react";

const servicesList = [
  {
    title: "Plumbing Materials",
    desc: "We stock pipes, fittings, taps, and water tanks from trusted brands.",
    img: "https://media.istockphoto.com/id/1471495919/photo/plumbing-fixtures-and-piping-parts-brass-connector-water-valve-for-pipe-brass-water-valve.webp?a=1&b=1&s=612x612&w=0&k=20&c=oWRm6nasCDEo9H4srIkcSsbOVKGGxm5ih1k5iS4JNt4=",
    
  },
  {
    title: "Construction Tools",
    desc: "Power tools, hand tools, and safety gear for professional builders and DIY projects.",
    img: "https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9uJTIwdG9vbHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Electrical Supplies",
    desc: "We provide wires, bulbs, switches, sockets, and installation accessories.",
    img: "https://media.istockphoto.com/id/476400336/photo/electrical-equipment.jpg?s=612x612&w=0&k=20&c=iaur-dMSVQO1FDyQjr6g_YDD8mJXhl-4useezOj4tCc=",
  },
  {
    title: "Bathroom & Sanitaryware",
    desc: "Toilets, sinks, showers, and bathroom accessories for residential and commercial use.",
    img: "https://images.unsplash.com/photo-1553104101-f1608f351b76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdGhyb29tJTIwQU5EJTIwc2FuaXRhcnklMjBtYXRlcmlhbHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Building Materials",
    desc: "Cement, roofing sheets, paint, and general construction essentials.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nJTIwbWF0ZXJpYWxzfGVufDB8fDB8fHww",
  },
  {
    title: "Delivery Services",
    desc: "We offer fast delivery to your site or home, ensuring convenience and reliability.",
    img: "https://media.istockphoto.com/id/2175177275/photo/aerial-drone-view-of-truck-car-on-green-summer-curved-road-transportation-and-logistics.jpg?s=612x612&w=0&k=20&c=h7fmhj4VArtQxEt5xNHh1_fK1sFKMYk9PovwKtMUkhQ=",
  },
  {
    title: "Generators",
    desc: "Reliable power backup solutions for homes and businesses.",
    img: "https://media.istockphoto.com/id/1337210492/photo/hand-starts-a-portable-electric-generator-in-front-of-a-summer-house-in-summer.jpg?s=1024x1024&w=is&k=20&c=KiZC9wFPKQs_IbI4SMbtLJHGhvINFXDqN60tIcukx80=",
  },
  {
    title: "Woodwork Tools",
    desc: "Complete woodworking kits for carpenters and DIY projects.",
    img: "https://media.istockphoto.com/id/2162666018/photo/hand-tools-and-workbench-in-carpentry-workshop.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ek1Qw0yW_qr6SLFUFQ6RP8uTw_4XMk1breJNJIbpEzs=",
  },
  {
    title: "Fire Safety Equipment",
    desc: "Fire extinguishers, blankets, and smoke alarms.",
    img: "https://media.istockphoto.com/id/902808382/photo/fire-extinguishing-equipments.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZRQ3_MovcEU-eA_uI-6YAcB0cwv4opl_2MA_k8I1v8E=",
  },
  {
    title: "Drainage Solutions",
    desc: "Modern systems for effective water flow and management.",
    img: "https://media.istockphoto.com/id/1984442173/photo/metal-grate-of-water-drain-background.jpg?s=612x612&w=0&k=20&c=NpHvLByOZC379k9KURCtcZ9sYwascAXXdONNQYRmtA8=",
  },
  {
    title: "Packaging Materials",
    desc: "Cartons, tapes, wraps for moving and storage.",
    img: "https://media.istockphoto.com/id/694000784/photo/cardboard-box-and-gum-tape.jpg?s=612x612&w=0&k=20&c=9H0G1FgIdGvvFEWYkFNLlHy0MC5oLLLDboXuwBvwxRI=",
  },
  {
    title: "Protective Gear",
    desc: "Helmets, gloves, goggles and safety jackets.",
    img: "https://media.istockphoto.com/id/947254500/photo/standard-construction-safety-equipment-on-wooden-table-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=nmCtBXiM6LRuEoyj7LmcqjC2yiUvsfR1AxZInOdPENc=",
  },
  {
    title: "Cleaning Supplies",
    desc: "Cleaning agents, brushes, mops, and sprayers.",
    img: "https://media.istockphoto.com/id/800282932/photo/cleaning-tool.jpg?s=612x612&w=0&k=20&c=cbInObr-zCqoCpaMiJ7Ngq8IPe6IOzXIHTH-566J4Q8=",
  },
  {
    title: "Glass & Window Hardware",
    desc: "Handles, locks, rollers and sliding gear.",
    img: "https://images.unsplash.com/photo-1731694406474-5a29e656a1cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
  },
  {
    title: "Furniture Accessories",
    desc: "Bed fittings, cabinet hinges, knobs and handles.",
    img: "https://media.istockphoto.com/id/1977853002/photo/various-handles-fasteners-locks-screws-for-furniture-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=GhcnuE1lzNmr_UiTxwbGp__D6k1ld4bEtOOoOX2Nl9Y=",
  },
];

const Services = () => {
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <style>{`
        .service-icon {
          font-size: 40px;
          color: #0d6efd;
        }
        .card:hover {
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: 0.3s;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold justify-content-center" href="#">
            Newtech Hardware
          </a>
        </div>
      </nav>

      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Our Services</h1>
          <p className="lead">
            Providing quality hardware solutions for homes, offices, and
            industries.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <h2 className="fw-bold">What We Offer</h2>
          </div>
          <div className="row g-4">
            {servicesList.map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 text-center">
                  <img
                    src={service.img}
                    className="card-img-top"
                    alt={service.title}
                  />
                  <div className="card-body">
                    <div className="service-icon mb-3">{service.icon}</div>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.desc}</p>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target={`#modal${index}`}
                    >
                      More Info
                    </button>
                  </div>
                </div>

                {/* Modal */}
                <div
                  className="modal fade"
                  id={`modal${index}`}
                  tabIndex="-1"
                  aria-labelledby={`modalLabel${index}`}
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id={`modalLabel${index}`}>
                          {service.title}
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <img
                          src={service.img}
                          className="img-fluid mb-3"
                          alt={service.title}
                        />
                        <p>{service.desc}</p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
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

export default Services;

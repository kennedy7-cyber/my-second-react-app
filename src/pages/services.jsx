import React from "react";

const servicesList = [
  {
    title: "Plumbing Materials",
    desc: "We stock pipes, fittings, taps, and water tanks from trusted brands.",
    img: "https://media.istockphoto.com/id/1391619870/photo/close-up-sewer-pipes-prepared-for-installation.jpg?s=612x612&w=0&k=20&c=FtoBWesMvmbTVGqYLqKajma8_C94fx2FOJ-qWqWLC14=",
  },
  {
    title: "Construction Tools",
    desc: "Power tools, hand tools, and safety gear for professional builders and DIY projects.",
    img: "https://images.unsplash.com/photo-1580810734898-5e1753f23337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3RydWN0aW9uJTIwJTIwbWF0ZXJpYWxzfGVufDB8fDB8fHww",
  },
  {
    title: "Electrical Supplies",
    desc: "We provide wires, bulbs, switches, sockets, and installation accessories.",
    img: "https://media.istockphoto.com/id/531865876/photo/tools-and-accessories-used-in-electrical-installations.webp?a=1&b=1&s=612x612&w=0&k=20&c=hE3VpEAIUvyLqNlIiq6s7Vkkdox8CItISHpf-_X9pX8=",
  },
  {
    title: "Bathroom & Sanitaryware",
    desc: "Toilets, sinks, showers, and bathroom accessories for residential and commercial use.",
    img: "https://images.unsplash.com/photo-1553104101-f1608f351b76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdGhyb29tJTIwQU5EJTIwc2FuaXRhcnklMjBtYXRlcmlhbHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Building Materials",
    desc: "Cement, roofing sheets, paint, and general construction essentials.",
    img: "https://media.istockphoto.com/id/1141916790/photo/cement-pouring-on-metal-rod.jpg?s=612x612&w=0&k=20&c=ta5feLYqqRIlQS86D3DFl6SdGPXIOEWwBxgjh4_VPNg=",
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
    img: "https://media.istockphoto.com/id/1345170562/photo/male-worker-taping-cardboard-box.webp?a=1&b=1&s=612x612&w=0&k=20&c=TGWObqtCA0Il7cQN2RZ-RfVvOBcAuLsY8AByfeUlEDw=",
  },
  {
    title: "Protective Gear",
    desc: "Helmets, gloves, goggles and safety jackets.",
    img: "https://media.istockphoto.com/id/947254500/photo/standard-construction-safety-equipment-on-wooden-table-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=nmCtBXiM6LRuEoyj7LmcqjC2yiUvsfR1AxZInOdPENc=",
  },
  {
    title: "Cleaning Supplies",
    desc: "Cleaning agents, brushes, mops, and sprayers.",
    img: "https://media.istockphoto.com/id/1139691179/photo/floor-cleaning-with-mob-and-bucket-on-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=nt5hy8ZpOojE9e6KMdyAUpKK51RkIM9R6uwpAOeyzjw=",
  },
  {
    title: "Glass & Window Hardware",
    desc: "Handles, locks, rollers and sliding gear.",
    img: "https://images.unsplash.com/photo-1544347120-e7b25160378a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2xhc3NlcyUyMGFuZCUyMHdpbmRvd3MlMjBvZiUyMGhvdXNlcyUyMG1hdGVyaWFsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Furniture Accessories",
    desc: "Bed fittings, cabinet hinges, knobs and handles.",
    img: "https://media.istockphoto.com/id/1318688379/photo/modern-open-plan-apartment-interior.jpg?s=612x612&w=0&k=20&c=wv2oR5Hz7U7WriLKZWfJ_a1x9EMnwCd8xhvf5cJhRyM=",
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
          <a className="navbar-brand fw-bold" href="#">
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
    </div>
  );
};

export default Services;

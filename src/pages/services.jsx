
import React from 'react';

const servicesList = [
  {
    icon: '🔧',
    title: 'Plumbing Materials',
    desc: 'We stock pipes, fittings, taps, and water tanks from trusted brands.',
    img: 'https://via.placeholder.com/300x200?text=Plumbing',
  },
  {
    icon: '🛠️',
    title: 'Construction Tools',
    desc: 'Power tools, hand tools, and safety gear for professional builders and DIY projects.',
    img: 'https://via.placeholder.com/300x200?text=Tools',
  },
  {
    icon: '💡',
    title: 'Electrical Supplies',
    desc: 'We provide wires, bulbs, switches, sockets, and installation accessories.',
    img: 'https://via.placeholder.com/300x200?text=Electrical',
  },
  {
    icon: '🚿',
    title: 'Bathroom & Sanitaryware',
    desc: 'Toilets, sinks, showers, and bathroom accessories for residential and commercial use.',
    img: 'https://via.placeholder.com/300x200?text=Bathroom',
  },
  {
    icon: '🧱',
    title: 'Building Materials',
    desc: 'Cement, roofing sheets, paint, and general construction essentials.',
    img: 'https://via.placeholder.com/300x200?text=Building+Materials',
  },
  {
    icon: '🚛',
    title: 'Delivery Services',
    desc: 'We offer fast delivery to your site or home, ensuring convenience and reliability.',
    img: 'https://via.placeholder.com/300x200?text=Delivery',
  },
  {
    icon: '🔌',
    title: 'Generators',
    desc: 'Reliable power backup solutions for homes and businesses.',
    img: 'https://via.placeholder.com/300x200?text=Generators',
  },
  {
    icon: '🪚',
    title: 'Woodwork Tools',
    desc: 'Complete woodworking kits for carpenters and DIY projects.',
    img: 'https://via.placeholder.com/300x200?text=Woodwork',
  },
  {
    icon: '🧯',
    title: 'Fire Safety Equipment',
    desc: 'Fire extinguishers, blankets, and smoke alarms.',
    img: 'https://via.placeholder.com/300x200?text=Fire+Safety',
  },
  {
    icon: '🪠',
    title: 'Drainage Solutions',
    desc: 'Modern systems for effective water flow and management.',
    img: 'https://via.placeholder.com/300x200?text=Drainage',
  },
  {
    icon: '📦',
    title: 'Packaging Materials',
    desc: 'Cartons, tapes, wraps for moving and storage.',
    img: 'https://via.placeholder.com/300x200?text=Packaging',
  },
  {
    icon: '🧤',
    title: 'Protective Gear',
    desc: 'Helmets, gloves, goggles and safety jackets.',
    img: 'https://via.placeholder.com/300x200?text=Safety+Gear',
  },
  {
    icon: '🧼',
    title: 'Cleaning Supplies',
    desc: 'Cleaning agents, brushes, mops, and sprayers.',
    img: 'https://via.placeholder.com/300x200?text=Cleaning',
  },
  {
    icon: '🪟',
    title: 'Glass & Window Hardware',
    desc: 'Handles, locks, rollers and sliding gear.',
    img: 'https://via.placeholder.com/300x200?text=Windows',
  },
  {
    icon: '🛏️',
    title: 'Furniture Accessories',
    desc: 'Bed fittings, cabinet hinges, knobs and handles.',
    img: 'https://via.placeholder.com/300x200?text=Furniture',
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
          <a className="navbar-brand fw-bold" href="#">Newtech Hardware</a>
        </div>
      </nav>

      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Our Services</h1>
          <p className="lead">Providing quality hardware solutions for homes, offices, and industries.</p>
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
                  <img src={service.img} className="card-img-top" alt={service.title} />
                  <div className="card-body">
                    <div className="service-icon mb-3">{service.icon}</div>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.desc}</p>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modal${index}`}>More Info</button>
                  </div>
                </div>

                {/* Modal */}
                <div className="modal fade" id={`modal${index}`} tabIndex="-1" aria-labelledby={`modalLabel${index}`} aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id={`modalLabel${index}`}>{service.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <img src={service.img} className="img-fluid mb-3" alt={service.title} />
                        <p>{service.desc}</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-4 text-center">
        <div className="container">
          <p className="mb-0">&copy; 2025 Newtech Hardware. All rights reserved.</p>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Services;

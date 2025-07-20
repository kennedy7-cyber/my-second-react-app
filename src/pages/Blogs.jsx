
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Choosing the Right Plumbing Materials',
    summary: 'Learn how to select quality pipes, taps, and fittings for long-lasting plumbing.',
    details: 'Plumbing materials should be durable, corrosion-resistant, and fit for your water pressure system. Choose PPR pipes for hot water and PVC for drainage. Taps with ceramic discs last longer.',
  },
  {
    id: 2,
    title: 'Power Tools Every Builder Needs',
    summary: 'A list of essential tools for any construction project from beginner to pro.',
    details: 'Must-have tools include drills, grinders, saws, and sanders. Consider cordless tools for mobility. Always check for wattage, RPM, and warranty when buying.',
  },
  {
    id: 3,
    title: 'Safety Gear in Construction Sites',
    summary: 'Protective gear saves lives. Here’s what you should never forget on site.',
    details: 'Always wear helmets, steel-toe boots, gloves, and reflective jackets. For dusty jobs, use masks and goggles. Proper safety can reduce worksite injuries by over 60%.',
  },
];

const Blog = () => {
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="fw-bold">Newtech Hardware Blog</h1>
          <p className="lead">Expert tips, news, and advice from the world of hardware and construction.</p>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <div className="row g-4">
            {blogPosts.map((post) => (
              <div className="col-md-4" key={post.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.summary}</p>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target={`#modal${post.id}`}
                    >
                      Read More
                    </button>
                  </div>
                </div>

                {/* Modal */}
                <div
                  className="modal fade"
                  id={`modal${post.id}`}
                  tabIndex="-1"
                  aria-labelledby={`modalLabel${post.id}`}
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id={`modalLabel${post.id}`}>{post.title}</h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p>{post.details}</p>
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

      <footer className="bg-dark text-white py-4 text-center">
        <div className="container">
          <p className="mb-0">&copy; 2025 Newtech Hardware. All rights reserved.</p>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Blog;

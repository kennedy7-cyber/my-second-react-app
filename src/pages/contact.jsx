
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8p3pl5l",
        "template_iuaz4nq",
        form.current,
        "0iXLVJkaS3tAnR-bG"
      )
      .then(
        (result) => {
          form.current.reset();
          setShowModal(true); // Show modal
        },
        (error) => {
          alert("Failed to send the message ❌");
          console.error(error.text);
        }
      )
      .catch((err) => {
        console.log("EmailJS Error:", err);
      })
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4 py-3">Contact Us</h2>

      <div className="row">
        {/* Left Side - Contact Form */}
        <div className="col-lg-8">
          <form ref={form} onSubmit={sendEmail} className="shadow p-4 rounded bg-light">
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" name="first_name" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" name="last_name" className="form-control" required />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" name="user_email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" name="subject" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" className="form-control" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="p-4 shadow btn-danger bg-light rounded h-100">
            <h5 className="mb-3 text-primary">📍 Location</h5>
            <p>kiambu wangige, Kenya</p>

            <h5 className="mt-4 mb-3 text-primary">📞 Mobile</h5>
            <p><a href="tel:+254758849440" className="text-decoration-none text-dark">+254 758 849 440</a></p>

            <h5 className="mt-4 mb-3 text-primary">📧 Email</h5>
            <p><a href="mailto:newtech255@gmail.com" className="text-decoration-none text-dark">newtech255@gmail.com</a></p>
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
          gap: "10px",
          zIndex: 1000,
        }}
      >
        <a href="https://wa.me/254758849440" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" style={{ width: "30px", height: "30px" }} />
        </a>
        <a href="https://instagram.com/yourplumbingpage" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" style={{ width: "30px", height: "30px" }} />
        </a>
        <a href="https://facebook.com/yourplumbingpage" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" style={{ width: "30px", height: "30px" }} />
        </a>
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title">Success ✅</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Check your email for a booking confimation. we'll see you soon</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

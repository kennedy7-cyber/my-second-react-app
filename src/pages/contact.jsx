
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // Replace with your service ID
        "YOUR_TEMPLATE_ID",    // Replace with your template ID
        form.current,
        "YOUR_PUBLIC_KEY"      // Replace with your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send the message ❌");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      <form ref={form} onSubmit={sendEmail} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name="user_name" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" name="user_email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="message" className="form-control" rows="5" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

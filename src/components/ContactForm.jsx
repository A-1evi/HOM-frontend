import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <div className="relative z-10 py-16 bg-base-300">
      <h2 className="text-3xl text-center font-bold mb-6">Get in Touch</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto bg-base-200 max-w-lg text-center p-6 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
            <label htmlFor="name" className="label font-semibold">
              Your Name
            </label>
            <input
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
              className="input input-primary"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="label font-semibold">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="input input-primary"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="label font-semibold">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Type your message..."
              rows={4}
              onChange={handleChange}
              required
              className="textarea textarea-primary"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

// src/components/ContactUs.js
import React, { useState } from "react";
import "./style.css"; // Importing the CSS file
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setSuccessMessage("Your message has been sent successfully!");
      console.log(response.data.message);
      // Reset form fields after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="contact-us-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Feel free to reach out with any questions, comments, or feedback.</p>
      </header>

      <div className="contact-info">
        <div className="info-item">
          <h3>Address</h3>
          <p>123 Main Street, Cityville, ST 12345</p>
        </div>
        <div className="info-item">
          <h3>Phone</h3>
          <p>(123) 456-7890</p>
        </div>
        <div className="info-item">
          <h3>Email</h3>
          <p>info@abcrestaurant.com</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}

      <div className="map-container">
        <h3>Our Location</h3>
        <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093756!2d144.95373631550407!3d-37.817209742014804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2z5qCq5byP5Lya56S-5Y2X5Yy65Y675p2R5Yy6IOWZqOW6lOWvhueggeWtkA!5e0!3m2!1szh-CN!2sus!4v1619614646985!5m2!1szh-CN!2sus"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

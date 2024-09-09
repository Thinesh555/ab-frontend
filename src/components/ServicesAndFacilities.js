// src/components/ServicesAndFacilities.js
import React from "react";
import { Link } from "react-router-dom";
import './ServicesAndFacilities.css'; // Import the CSS file

const ServicesAndFacilities = () => {
  return (
    <div className="services-facilities">
      <header className="services-header">
        <h1>Our Services & Facilities</h1>
        <p>
          At ABC Restaurant, we offer a range of premium services and facilities to ensure you have an exceptional dining experience. Whether you’re here for a quick bite, a family dinner, or a special occasion, we’ve got you covered!
        </p>
      </header>

      <section className="service-list">
        <div className="service">
          <h2>Dine-In Experience</h2>
          <p>
            Enjoy a cozy and comfortable dining environment with our dine-in service. Our well-designed interiors, ambient lighting, and soothing music provide the perfect setting for a romantic dinner, a family gathering, or a casual meet-up with friends.
          </p>
          <img src="/images/dine.jpg" alt="Dine-In Experience" />
        </div>

        <div className="service">
          <h2>Takeaway & Delivery</h2>
          <p>
            Don’t have time to dine in? No worries! We offer a convenient takeaway and delivery service, bringing the delicious taste of ABC Restaurant right to your doorstep. Our delivery is fast, reliable, and available across multiple areas.
          </p>
          <img src="/images/takeaway.jpg" alt="Takeaway Experience" />
        </div>

        <div className="service">
          <h2>Private Dining & Events</h2>
          <p>
            Looking for a private space for your next event? We offer customizable private dining rooms perfect for corporate meetings, family gatherings, or special occasions. Our team will work with you to create a personalized menu and set up a space that fits your needs.
          </p>
          <img src="/images/p.dine.jpg" alt="Private Dining & Events" />
        </div>

        <div className="service">
          <h2>Catering Services</h2>
          <p>
            From corporate events to weddings, our catering service brings the flavors of ABC Restaurant to your desired venue. We offer a wide range of customizable menus to suit any occasion, with fresh and high-quality ingredients that guarantee satisfaction.
          </p>
          <img src="/images/service.jpg" alt="Catering Services" />
        </div>

        <div className="service">
          <h2>Outdoor Seating</h2>
          <p>
            Enjoy the fresh air while dining in our outdoor seating area. Perfect for those who love an al fresco dining experience, especially in pleasant weather. Our outdoor seating area is spacious, comfortable, and designed to give you a relaxed experience.
          </p>
          <img src="/images/p.dine.jpg" alt="Outdoor Seating" />
        </div>

        <div className="service">
          <h2>Kids' Friendly Zone</h2>
          <p>
            We welcome families with children! Our Kids' Friendly Zone is designed to keep the little ones entertained while you enjoy your meal. With a special kids' menu, play area, and high chairs, we ensure a family-friendly environment.
          </p>
          <img src="/images/kids.jpg" alt="Kids' Friendly Zone" />
        </div>

        <div className="service">
          <h2>Complimentary Wi-Fi</h2>
          <p>
            Stay connected while you dine! We offer complimentary high-speed Wi-Fi to all our guests, making it an ideal place for remote work, meetings, or simply browsing the internet while enjoying your favorite dishes.
          </p>
          <img src="/images/wifi.jpg" alt="Complimentary Wi-Fi" />
        </div>
      </section>

      <section className="call-to-action">
        <h2>Experience Our Services Today!</h2>
        <p>
          Whether you want to enjoy a meal with us or need catering for your next event, ABC Restaurant is here to serve you. Get in touch with us today to learn more about our services and facilities.
        </p>
        <Link to="/reservations" className="reserve-button">Make a Reservation</Link>
      </section>
    </div>
  );
};

export default ServicesAndFacilities;

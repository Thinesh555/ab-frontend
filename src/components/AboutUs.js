// src/components/AboutUs.js
import React from "react";
import './style.css'; // Importing the CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About ABC Restaurant</h1>
        <p>
          Welcome to ABC Restaurant! We are committed to delivering a unique dining experience to our valued customers, where tradition meets innovation. Our journey began in 2024, and since then, we have been serving delicious, high-quality food made from the freshest ingredients.
        </p>
      </header>

      <section className="history">
        <h2>Our History</h2>
        <p>
          Established over three decades ago, ABC Restaurant started as a small family-owned diner with a passion for great food and customer service. Today, we have grown into a beloved local landmark known for our signature dishes, warm hospitality, and a cozy atmosphere that feels just like home.
        </p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide our guests with a dining experience that is both memorable and delightful. We strive to achieve this through our commitment to quality, fresh ingredients, and a focus on customer satisfaction.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            We envision ABC Restaurant as a place where people come to celebrate special moments, enjoy exceptional food, and create lasting memories with friends and family. Our goal is to be recognized as a leader in the culinary industry while maintaining our community roots.
          </p>
        </div>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We believe in serving food that is fresh, flavorful, and crafted with care.</li>
          <li><strong>Customer Satisfaction:</strong> Your happiness is our top priority, and we aim to exceed your expectations every time you visit us.</li>
          <li><strong>Innovation:</strong> We constantly explore new ways to enhance our menu and services.</li>
          <li><strong>Community:</strong> We take pride in being a part of our local community and actively give back through various initiatives.</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <p>
          Our team of dedicated chefs, friendly waitstaff, and attentive management work together to ensure that every aspect of your dining experience is exceptional. From our kitchen to your table, we pour our hearts into every meal we serve.
        </p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          At ABC Restaurant, we offer a variety of options that cater to all tastes and preferences. From delicious appetizers to mouth-watering main courses, and delectable desserts, our menu is designed to satisfy every palate. Whether you're here for a quick bite, a romantic dinner, or a family gathering, we guarantee an unforgettable experience.
        </p>
      </section>

      <section className="call-to-action">
        <h2>Join Us Today!</h2>
        <p>
          Come and enjoy the best dining experience at ABC Restaurant. We look forward to welcoming you and making your time with us special. Book a table, explore our menu, or simply drop by and savor the flavors of our delicious cuisine.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

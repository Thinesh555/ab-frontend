// src/components/Reservations.js
import React, { useState } from "react";
import "./style.css"; // Importing the CSS file

const Reservations = () => {
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    specialRequests: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the logic to submit the form data to the backend or an API

    console.log(reservationData);
    setSuccessMessage("Your reservation has been submitted successfully!");
    // Reset form fields
    setReservationData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
      specialRequests: "",
    });
  };

  return (
    <div className="reservations-container">
      <header className="reservations-header">
        <h1>Make a Reservation</h1>
        <p>
          Book your table online easily and conveniently. Simply fill out the form below to reserve your spot at ABC Restaurant.
        </p>
      </header>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={reservationData.name}
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
            value={reservationData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={reservationData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Reservation Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={reservationData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Reservation Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={reservationData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="20"
            value={reservationData.guests}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={reservationData.specialRequests}
            onChange={handleChange}
            placeholder="Any special requests?"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Reservation
        </button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Reservations;

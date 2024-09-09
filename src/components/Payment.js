import React, { useState } from "react";
import "./Payment.css"; // Import the CSS file

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvc: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleAmountChange = (e) => setAmount(e.target.value);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Simple validation
    if (!amount || !cardDetails.number || !cardDetails.expiry || !cardDetails.cvc) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5005/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, cardDetails }),
      });

      const data = await response.json();
      if (data.success) {
        setSuccess("Payment successful!");
      } else {
        setError(data.message || "Payment failed.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="payment-container">
      <h1>Make a Payment</h1>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount ($)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="number">Card Number</label>
          <input
            type="text"
            id="number"
            name="number"
            value={cardDetails.number}
            onChange={handleCardChange}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiry">Expiry Date</label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            value={cardDetails.expiry}
            onChange={handleCardChange}
            placeholder="MM/YY"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            value={cardDetails.cvc}
            onChange={handleCardChange}
            placeholder="123"
            required
          />
        </div>

        <button type="submit" className="submit-button">Pay Now</button>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default Payment;

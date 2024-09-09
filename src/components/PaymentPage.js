// src/components/PaymentPage.js
import React from 'react';
import './PaymentPage.css'; // Importing the CSS file

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <p>Please enter your payment details below:</p>
      {/* Add Stripe or any other payment gateway integration here */}
      {/* For example, using Stripe: */}
      <form>
        {/* Payment form fields */}
        <label>
          Card Number:
          <input type="text" name="cardNumber" />
        </label>
        <label>
          Expiration Date:
          <input type="text" name="expirationDate" />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" />
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;

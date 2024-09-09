// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import PaymentPage from './components/PaymentPage';
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import ServicesAndFacilities from "./components/ServicesAndFacilities";
import Reservations from "./components/Reservations";
import LoginRegister from "./components/LoginRegister";
import ContactUs from "./components/ContactUs";
import AdminDashboard from "./components/AdminDashboard";
import StaffDashboard from "./components/StaffDashboard";
import './App.css'; // Importing the main CSS file

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesAndFacilities />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-page" element={<PaymentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

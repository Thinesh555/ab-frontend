// src/components/LoginRegister.js
import "./LoginRegister.css"; // Importing the CSS file
import React, { useState } from 'react';
import axios from 'axios';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); // To toggle between login and register forms
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error messages

    try {
      const endpoint = isLogin ? 'login' : 'register';
      const response = await axios.post(`http://localhost:3000/api/auth/${endpoint}`, formData);
      alert(response.data.message); // Show success message
    } catch (error) {
      console.error(`Error ${isLogin ? 'logging in' : 'registering'} user:`, error);
      setErrorMessage(error.response?.data?.message || 'Something went wrong, please try again.');
    }
  };

  return (
    <div className="login-register-container">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <form className="login-register-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="submit-button">
          {isLogin ? 'Login' : 'Register'}
        </button>
        <div className="toggle-link">
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Switch to Register' : 'Switch to Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginRegister;

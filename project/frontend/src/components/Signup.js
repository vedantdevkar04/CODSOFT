// Signup.js
// src/components/Signup.js
import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import bcrypt from 'bcryptjs';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Hash the password before sending it to the server
      const hashedPassword = await bcrypt.hash(formData.password, 10);

      const response = await axios.post('http://localhost:8080/submit', {
        ...formData,
        password: hashedPassword, 
      });

      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className='input'
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone No:</label>
        <input
          type="tel"
          className='input'
          name="phone_no"
          value={formData.phone_no}
          onChange={handleChange}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          className='input'
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className='input'
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className='input'
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

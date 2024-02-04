 // Login.js
import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom'
import './Login.css'; // Import your login CSS file
import axios from 'axios';

 

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
   

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have a backend endpoint for login
      const response = await axios.post('http://localhost:8080/login', loginData);
      console.log(response.data); 
      

      // If the login is successful, call the onLogin callback
      if (response.data.success) {
         
        navigate('/')
      }
       
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogout = () => {
    // Handle logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        // If logged in, show the Logout button
        <button onClick={handleLogout}>Logout</button>
      ) : (
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className='input'
          name="email"
          value={loginData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className='input'
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
      )}
    </div>
  );
};

export default Login; 


 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
       
        
        
      </Routes>
    </Router>
  );
}

export default App;

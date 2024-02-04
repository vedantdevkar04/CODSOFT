import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const PaymentForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your form submission logic here
 
        try {
           
          const response = await axios.post('http://localhost:8080/', formData);
          console.log(response.data); 
          
    
          // If the login is successful, call the onLogin callback
          if (response.data.success) {
             
            
          }
           
        } catch (error) {
          console.error(error);
        }
      };
  

  return (
    <div>
      <h1 className="payTitle">Personal Information</h1>
      <form onSubmit={handleSubmit}>
        <label>Name and Surname</label>
        <input
          type="text"
          name="name"
          placeholder="Narendra Modi"
          className="payInput"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="+91 98334838XX"
          className="payInput"
          value={formData.phone}
          onChange={handleChange}
        />
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="DN Nagar 400789"
          className="payInput"
          value={formData.address}
          onChange={handleChange}
        />
        <h1 className="payTitle">Card Information</h1>
        <div className="cardIcons">
          <img src="./img/visa.png" width="40" alt="" className="cardIcon" />
          <img src="./img/master.png" alt="" width="40" className="cardIcon" />
        </div>
        <input
          type="password"
          name="cardNumber"
          className="payInput"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
        />
        <div className="cardInfo">
          <input
            type="text"
            name="expiryMonth"
            placeholder="MM"
            className="payInput sm"
            value={formData.expiryMonth}
            onChange={handleChange}
          />
          <input
            type="text"
            name="expiryYear"
            placeholder="YYYY"
            className="payInput sm"
            value={formData.expiryYear}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            className="payInput sm" 
            value={formData.cvv}
            onChange={handleChange}
          />
        </div>
        <button type="submit" name="submit" className="payButton"  >
          Checkout!
        </button>
        <span className="close">X</span>
      </form>
    </div>
  );
};

export default PaymentForm;

// src/components/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Make sure to import the CSS file

const RegisterForm = ({ onRegisterAdded }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/registers/', formData)
      .then(() => {
        onRegisterAdded();
        setFormData({ name: '', email: '', phone: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Add Register</h2>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <button className="save-btn" type="submit">Add</button>
    </form>
  );
};

export default RegisterForm;

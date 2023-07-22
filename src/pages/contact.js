import React, { useState } from 'react';
import "../styles/contact.css"; // Import the custom CSS file
import "../styles/main.css"; // Import the main CSS file

function FormExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && value.trim() === '') {
      setError('Name is required');
    } else if (name === 'email' && value.trim() === '') {
      setError('Email is required');
    } else if (name === 'message' && value.trim() === '') {
      setError('Message is required');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic
    // ...

    // Reset form fields and error state
    setName('');
    setEmail('');
    setMessage('');
    setError('');
  };

  return (
    <div className="form-container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-item">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default FormExample;

import React, { useState } from 'react';
import LogoN38 from '../assets/Images/Any questions/notification logo.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    if (!email.trim()) {
      setError('Please enter your email');
      setSuccessMessage(''); 
    } 
    
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      setSuccessMessage(''); 
    } 
  
    else {
      setError('');
      setSuccessMessage('Submitted successfully!');
      console.log("Email Submitted:", email);
    }
  };

  return (
    <>
      <div className="subscribe">
        <div className="flex">
          <img src={LogoN38} alt="notification logo" />
          <h2 className="desktop">Subscribe to our newsletter to stay informed about latest updates</h2>
          <h2 className="mobile">Subscribe to our newsletter</h2>
        </div>
        <div className="wrapper">
          <form onSubmit={handleSubmit} className="input-group">
            <i className="fa-regular fa-envelope icon"></i>
            <input
              className="form-input email"
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" type="submit">Subscribe</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default Subscribe;


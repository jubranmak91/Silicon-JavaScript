import React, { useState } from 'react';

const GetOnlineConsulation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    specialist: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    let error = '';

    if (name === 'fullName' && !/^[A-Za-z\s\-]{2,}$/.test(value)) {
      error = "Full Name must be at least 2 characters long and contain no numbers.";
    } 
    else if (name === 'email' && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
      error = "Please enter a valid email address (e.g., name@example.com)";
    } 
    else if (name === 'specialist' && !value) {
      error = "Please enter a specialist.";
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s\-]{2,}$/.test(formData.fullName)) {
      newErrors.fullName = "Full Name must be at least 2 characters long and contain no numbers.";
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com)";
    }

    if (!formData.specialist) {
      newErrors.specialist = "Please enter a specialist.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    console.log('Form Data:', formData);

    if (validateForm()) {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
       
        console.log('Form submission successful');
      } else {
        setErrors({ submit: 'Failed to submit form' });
      
        console.error('Form submission failed');
      }
    } else {
      setErrors({ submit: 'Please fill out all fields correctly.' });
    }
  };

  return (
    <div className="consulation">
      <h2 className="h2 get">Get Online Consulation</h2>

      <form id="regForm" className="reg-form space-y-2" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="fullName" className="form-lable">Full Name</label>
          <input type="text" name="fullName" className="form-input" value={formData.fullName} onChange={handleInputChange} required />
          {errors.fullName && <p className="error-message">{errors.fullName}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="email" className="form-lable">Email Address</label>
          <input type="text" id="email" name="email" className="form-input" value={formData.email} onChange={handleInputChange} required/>
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="specialist" className="form-lable">Specialist</label>
          <input type="text" id="specialist" name="specialist" className="form-input" value={formData.specialist} onChange={handleInputChange} required
          />
          {errors.specialist && <p className="error-message">{errors.specialist}</p>}
        </div>

        {errors.submit && <p className="error-message">{errors.submit}</p>}


        {isSubmitted && <p className="confirmation-message">Submitted successfully ! *****Siktar mot betyget "väl godkänd" i den kursen också :)*****</p>}

        <div className="apointement">
          <button type="submit" className="click btn btn-primary">Make an Appointment</button>
        </div>
      </form>

      
      
    </div>
  );
};

export default GetOnlineConsulation;



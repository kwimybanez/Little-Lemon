import React, { useState } from 'react';

const AlertContext = () => {
  const [formData, setFormData] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like submit it to a server
    // For this example, let's just log the data
    console.log(formData);
    // Show the alert
    setShowAlert(true);
    // Reset the form
    setFormData({});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={formData.name || ''}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email || ''}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      {showAlert && (
        <div className='alert'>
          Form submitted successfully!
          <button onClick={() => setShowAlert(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AlertContext;

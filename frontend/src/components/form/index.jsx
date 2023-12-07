import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter le formulaire (envoi à un backend, etc.)
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
       <div class="left-column">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      </div>
      <div className="right-column">
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
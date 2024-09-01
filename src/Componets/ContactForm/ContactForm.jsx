import React from 'react';
import './ContactForm.css'; 

function ContactForm() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "12ccb587-67c5-49cd-8c4a-2a5cb6c9d562");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset(); 
    } else {
      console.log("Error", res);
    }
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <h2 className='form-heading'>Let's Talk</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        style={{ display: 'block', marginBottom: '10px' }} 
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        style={{ display: 'block', marginBottom: '10px' }} 
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      ></textarea>
      <button type="submit">Submit Form</button>
    </form>
  );
}

export default ContactForm;

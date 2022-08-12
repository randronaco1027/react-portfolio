import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const form = useRef()
  // Submit
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zkvp7lo',
      'template_e3iy6er',
      form.current,
      'zJiqUj2ErrATBt6-g')
      .then((result) => {
        e.target.reset()
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  // Validate email and if user entered text in appropriate fields, alert user if they did not
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    // Contact Form
    <section className="contact-form my-5">
      <h1 data-testid="h1tag">Contact me</h1>
      <div className="email-link">
        <p>Email me directly:     </p>
        <a href="mailto:randronaco1027@gmail.com"> randronaco1027@gmail.com</a>
      </div>
      <h5>- OR -</h5>
      <form ref={form} onSubmit={sendEmail}>
        <div className='p-1 div-input'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className='p-1 div-input'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message" className='p-1'>Message</label>
          <textarea name="message" className='m-1' defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" className='m-1'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;

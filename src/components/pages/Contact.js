import React, { useState } from 'react';
import '../../styles/Contact.css';

import { required, validateEmail } from '../../utils/helpers';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErrorMessage('Name is a required field.');
            return;
        } if (!validateEmail(email)) {
          setErrorMessage('Email is invalid.');
          return;
        } if (!message) {
          setErrorMessage("Message is a required field."
          );
          return;
        }

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
      };

    return (
        <div>
            <div className="form-container">
                <div className="contact-background">
                    <h2 className="contact-title">Please Contact Me!</h2>
                    <label for="name" type="text" className="form-label">Name</label>
                    <br />

                    <input name="name" value={name} onChange={handleInputChange} type="text" className="form-field-sm"></input>

                </div>
                <div className="contact-background">
                    <label for="email" type="email" className="form-label">Email Address</label>
                    <br />

                    <input name="email" value={email} onChange={handleInputChange} type="email" className="form-field-sm"></input>

                </div>
                <div className="contact-background">
                    <label for="message" type="text" className="form-label">Message</label>
                    <br />

                    <textarea name="message" value={message} onChange={handleInputChange} type="text" className="form-field-lg"></textarea>

                </div>
                <button type="button" onClick={handleFormSubmit} className="m-3 btn btn-secondary">Submit</button>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>

        </div>
    )
};

export default Contact;
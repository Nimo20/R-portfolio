import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = '';

        if (!value) {
            error = 'This field is required';
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            error = 'Invalid email address';
        }

        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        const newErrors = {};
        Object.keys(formState).forEach((key) => {
            if (!formState[key]) {
                newErrors[key] = 'This field is required';
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Send email using EmailJS
            emailjs.send('service_3cem42q', 'template_lh9z29c', formState, 'vHFeMPAuFjAIJEvRH')
                .then((response) => {
                    console.log('Email sent successfully:', response);
                    setSuccessMessage('Your message has been sent successfully!');
                    setFormState({ name: '', email: '', message: '' }); // Clear form fields
                    setErrors({}); // Clear errors
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                    setErrorMessage('An error occurred while sending your message. Please try again.');
                });
        }
    };

    return (
        <section className="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                </label>
                <button type="submit">Submit</button>
                {successMessage && <p className="success">{successMessage}</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </section>
    );
};

export default Contact;






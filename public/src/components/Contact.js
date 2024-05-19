import React, { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

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

    return (
        <section className="contact">
            <h2>Contact</h2>
            <form>
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
            </form>
        </section>
    );
};

export default Contact;
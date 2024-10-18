import React, { useState } from 'react';
import './ContactUs.css';
import image from './images/imagecontact.png';


const ContactUs = () => {
    const [coffeeType, setCoffeeType] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !phone) {
            setError('Все поля должны быть заполнены.');
            return;
        }
        if (!/^\d{10}$/.test(phone)) {
            setError('Номер телефона должен содержать 10 цифр.');
            return;
        }
        alert(`Вы выбрали ${coffeeType} и ваша форма отправлена!`);
        // Здесь можно добавить логику отправки формы
        setError('');
    };

    return (
        <div className="contact-us">
            <div className="contact-container">
                <div className="contact-column">
                    <h2 className="contact-title">We bring you hot coffee</h2>
                    <p className="contact-text">Choose your favorite drink and dessert, fill out the form and wait for a message from the manager</p>
                </div>
                <div className="contact-column form-column">
                    <form onSubmit={handleSubmit}>
                        <select
                            id="coffee"
                            value={coffeeType}
                            onChange={(e) => setCoffeeType(e.target.value)}
                            required
                        >
                            <option value="">Choose your coffee:</option>
                            <option value="Espresso">Espresso</option>
                            <option value="Americano">Americano</option>
                            <option value="Latte">Latte</option>
                            <option value="Cappuccino">Cappuccino</option>
                            <option value="Flat White">Flat White</option>
                            <option value="Mocha">Mocha</option>
                        </select>
                        <label htmlFor="Name" title="Your name:"></label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <label htmlFor="phone" title="Your number"></label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className='contact-button'>Choose your coffee</button>
                    </form>
                </div>
                <div className="image-column">
                    <img src={image} alt="Coffee" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

import React, { useState } from 'react';
import { API_ENDPOINTS, PROPERTY_IMAGE } from '../Services/Endpoints';
import axios from 'axios';

const ContactModal = ({ show, onClose, propertyId, ownerId }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(API_ENDPOINTS.contact.add, {
                propertyId,
                ownerId,
                message,
            });
            alert("Your message has been sent!");
            onClose();
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Contact Owner</h2>
                <form onSubmit={handleSubmit}>
                    <textarea 
                        name="message"  // Adding name attribute
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message"
                        required 
                    />
                    <button type="submit">Send Message</button>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ContactModal;

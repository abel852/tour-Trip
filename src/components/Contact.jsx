import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-flex">
        
        
        <div className="contact-info">
          <p className="accent-text">Reach Out</p>
          <h2 className="contact-title">Visit Our Addis Office</h2>
          
          <div className="contact-details">
            <div className="detail-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>Bole Road, Near Friendship Mall, Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="detail-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+251 911 22 33 44</p>
              </div>
            </div>
            <div className="detail-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>info@ethiotrek.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
               <input type="text" placeholder="Your Name" required />
               <input type="email" placeholder="Your Email" required />
            </div>
            <textarea placeholder="Tell us about your adventure plans..."></textarea>
            <button className="submit-btn">Send Message</button>
          </form>
        </div>

        
        <div className="map-container">
          <iframe 
            title="Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.8000!2d38.789!3d9.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1" 
            width="100%" height="100%" allowFullScreen="" loading="lazy">
          </iframe>
          <div className="map-badge">Ethio Hiking HQ</div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
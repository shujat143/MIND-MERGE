import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>Hi-Tech city, Mind-Space Hyderabad</p>
          <p>Email: hr@mmstinfo.com</p>
          <p>Phone: +91 9966566050</p>
        </div>
        
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; Copyright @2022 owned by Mind Merge Soft Tech Private Limited.</p>
      </div>
    </footer>
  );
};

export default Footer;

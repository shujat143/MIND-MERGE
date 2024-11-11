import React from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Mind Soft</div>
      
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <button type="submit"><i className="fas fa-search"></i></button>
      </div>
      
      <div className="social-icons">
        <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="icon"><i className="fab fa-twitter"></i></a>
        <a href="#" className="icon"><i className="fab fa-instagram"></i></a>
        <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;

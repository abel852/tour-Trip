import React from 'react';
import { FaPhoneAlt, FaRegClock, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-flex">
        <div className="top-bar-info">
          <div className="info-item">
            <FaPhoneAlt className="top-icon" />
            <span>+251 911 22 33 44</span>
          </div>
          <div className="info-item hide-mobile">
            <FaRegClock className="top-icon" />
            <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
          </div>
        </div>
        <div className="top-bar-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
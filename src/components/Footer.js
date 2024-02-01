import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/about-us'>About Us</Link>
            <Link to='/contact-us'>Contact Us</Link>
            <Link to='/'>FAQ</Link>
          </div>
          <div className='footer-link-items'>
            <Link to='/services'>Services</Link>
            <Link to='/services'>Fingerprint</Link>
            <Link to='/contact-us'>Appointments</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <a href="tel: 650-961-4646">650-961-4646</a>
            <a href="mailto: mailallcenter1@gmail.com">mailto: mailallcenter1@gmail.com</a>
            <a class="" href="#">Mon - Fri : 10am to 5pm PST<br/>
                    Sat : 10am to 2pm PST</a>
          </div>
        </div>
      </div>
      <div class="footer-text">
        <p class="copyrights">© Copyrights, All Rights Reserved by Live Scan</p> 
      </div>
    </div>
  );
}

export default Footer;

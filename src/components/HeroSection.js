import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='main-content'>
    <div className='hero-container1'>
      <div className='left'>
        <img src='/images/fingerprint-1.jpg' />
      </div>
      <div className='right'>
        <h1>Want To Get LiveScan?</h1>
        <p>We are an officially certified fingerprinting service provider agency 
          authorized by the Department of Justice and FBI.</p>
      </div>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Services
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hi')}
        >
          AboutUs
        </Button>
      </div> */}
    </div>
    </div>
  );
}

export default HeroSection;

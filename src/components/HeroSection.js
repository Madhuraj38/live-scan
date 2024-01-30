import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/fingerprint.jpg' />
      <h1>Want To Get FingerPrinted?</h1>
      <p>We are an officially certified fingerprinting service provider agency 
        authorized by the Department of Justice and FBI.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Demo1
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hi')}
        >
          Demo2
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

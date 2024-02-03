import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import DoneIcon from '@mui/icons-material/Done';


function HeroSection() {
  return (
    <div className='main-content'>
      {/* <div className='hero-container1'>
        <div className='left'>
          <img src='/images/fingerprint-1.jpg' />
        </div>
        <div className='right'>
          <h1>Want To Get LiveScan?</h1>
          <p>We are an officially certified fingerprinting service provider agency 
            authorized by the Department of Justice and FBI.</p>
        </div>
        <div className='hero-btns'>
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
        </div>
      </div> */}
      <div className='service'>
      <div className='Grid'>
          <div className='left'>
            <img style={{borderRadius:'10px'}} src='/images/fingerprint-1.jpg' />
          </div>
          <div className='right'>
            <div className='inner-content'>
                <h1>Want To Get LiveScan?</h1>
                <p>We are an officially certified fingerprinting service provider agency 
            authorized by the Department of Justice and FBI.</p>
                <h4> Services We Offer</h4>
                {/* <ListItemButton component="a" href="https://www.mailallcenter.com/Notary-Public">
                  <ListItemText primary="Notary Public" />
                </ListItemButton> */}

                <a href='/' target='_blank'><span><DoneIcon sx={{color:'green'}}/>&nbsp;Live Scan</span></a>
                <a href='https://www.mailallcenter.com/Notary-Public' target='_blank'><span><DoneIcon sx={{color:'green'}}/>&nbsp;Notary Public</span></a>
                <a href='https://www.mailallcenter.com/Passport-Photos' target='_blank'><span><DoneIcon sx={{color:'green'}}/>&nbsp;Passport Photo</span></a>
                <a href='https://www.mailallcenter.com/Passport-Photos' target='_blank'><span><DoneIcon sx={{color:'green'}}/>&nbsp;Passport Renewal</span></a>
                <a href='https://www.mailallcenter.com/Mailbox-Rental' target='_blank'><span><DoneIcon sx={{color:'green'}}/>&nbsp;Mail Box Rental</span></a>
                <a href='https://www.mailallcenter.com/Pack-Ship/Shipping' target='_blank'><span><DoneIcon sx={{color:'green'}}/>&nbsp;Pack & Ship</span></a>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default HeroSection;

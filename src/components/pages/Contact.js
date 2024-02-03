import React from 'react';
import '../../App.css';
import '../Contactus.css';
import HeroSectionContact from '../HeroSectionContact';
import CallIcon from '@mui/icons-material/Call';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GoogleMapComponent from '../GoogleMapComponent';
import PlaceIcon from '@mui/icons-material/Place';

export default function Contact() {
  return( 
  <>
  
  <HeroSectionContact />
  <div className='aboutus'>
  <div className='head'>
      <h1>Contact Us</h1>
    </div>
  </div>
  <div className='contact-wrapper'>
  <div className='contact-container'>
  <div className='contact-link-wrapper'>
          <div className='contact-link-items'>
            <div className='contact-link-icons'>
            <CallIcon/>
            <a href="tel: 650-961-4646">650-961-4646</a>
            </div>
            <div className='contact-link-icons'>
            <MailOutlinedIcon/>
            <a href="mailto: mailallcenter1@gmail.com">mailallcenter1@gmail.com</a>
            </div>
            <div className='contact-link-icons'>
            <PlaceIcon/>
            <a href="https://www.google.com/maps/place/1208+E+Arques+Ave+STE+101,+Sunnyvale,+CA+94085,+USA/@37.379968,-121.99481,17z/data=!4m6!3m5!1s0x808fb61e77a7ccfb:0xe3d343dad895aea3!8m2!3d37.3799677!4d-121.9948103!16s%2Fg%2F11gfp1crbg?hl=en&entry=tts&shorturl=1">809 Cuesta Dr, Suite B
Mountain View, CA 94040</a>
            </div>
            <div className='contact-link-icons'>
            <AccessTimeIcon/>
            <a class="" href="#">Mon - Fri : 10am to 5pm PST<br/>
                    Sat : 10am to 2pm PST</a>
            </div>
          </div>
    </div>
    </div>
    <div className='contact-container'>
        <div style={{ height: '300px', width: '100%', margin: '0 auto' }}>
          <GoogleMapComponent />
        </div>
    </div>
  </div>
  </>
  
  )
}

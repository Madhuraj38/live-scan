import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import HeroSectionServices from '../HeroSection_Services';

export default function Services() {
  return (
    <>
    <HeroSectionServices />

    <div className='about'>
        <h1>Services</h1>
        <br/>
        <p>
        Our state of the art live scan fingerprinting system can digitally scan and capture your fingerprints, and then immediately transmit them electronically to the California State Department of Justice in Sacramento. You can walk in for service any time during business hours without an appointment. If you are located in San Mateo, Fremont, Burlingame, Redwood City, Foster City, Campbell, Union City, Pleasanton, Livermore, or any other location, you can also benefit from our mobile live scan fingerprint service.
        </p>
      </div>
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/Walkin.jpg'
                title='Walk In'
                text='We provide the convenience of a walk-in facility, 
                allowing you to visit us during office hours without the need for a prior appointment.'
              />
              <CardItem
                src='images/Appointment.jpg'
                title='Appointments'
                text='For privacy, appointments are offered upon request and 
                are also available outside of regular office hours.'
                path='/contact-us'
              />
              <CardItem
                src='images/Payment.jpg'
                title='Payments'
                text='We welcome both cash and credit payments, providing flexibility 
                with multiple payment options for your convenience.'
              />
            </ul>
          </div>
        </div>
      </div>
      <div className='about'>
        <h1>Fees</h1>
        <br/>
        <p>
        Our transparent fee structure ensures you have a clear understanding of the costs involved. Our fingerprint rolling fees is only $25.00. Additional processing fees are required for state Department of Justice (DOJ) and FBI level criminal history records checks. Other fees may also be required.
        </p>
      </div>

    </>
  );
}

import React from 'react';
import '../../App.css';
import HeroSectionAbout from '../HeroSectionAbout';

export default function About() {
  return (
 <>
  <HeroSectionAbout />
  <div className='aboutus'>
    <div className='head'>
      <h1>About Us</h1>
    </div>
    <div className='content'>
      <h2>About Us</h2>
      <p>At LiveScan Express Hub, we offer both In-Office and Onsite fingerprinting services to Northern California and surrounding areas.
         Whether you prefer the convenience of walking in without an appointment or having our services brought to your doorstep, we've got you covered. 
         Our fingerprinting services include both Computer-based and Ink (card) based options, ensuring flexibility to meet your needs. 
         Our top priority is to save you time while providing fingerprinting services of the highest quality and security. 
         We strive to offer utmost convenience and ease for all your live scan fingerprint service requirements.
      </p>
      <h2>Who we are</h2>
      <p>At our company, safety and security are paramount. Founded to meet the growing demand for top-tier Peer Service Providers (PSP) in California, we prioritize your privacy and peace of mind. 
        Our Department of Justice Certified Fingerprint Specialists leverage their extensive training and expertise to ensure swift and accurate capture of your information. 
        With over 20 years of combined experience in fingerprinting, our dedicated staff is committed to delivering prompt and convenient service to our community, neighbors, partners, and employees.
      </p>
      <h2>What we do</h2>
      <p>As an accredited Department of Justice and FBI certified fingerprinting service provider, our agency specializes in electronically 
        capturing and submitting fingerprints for various purposes including licensure, certification, volunteering, employment, and more. 
        Additionally, we offer mobile Live Scan fingerprinting services for your convenience. Through our direct partnership with the Department of Justice, 
        we securely transmit your fingerprints and associated data within seconds, expediting the process. 
        With multiple "Live Scan" machines strategically located throughout Northern California, we can accommodate group or individual needs seven days a week.
      </p>
      <h2>How we do</h2>
      <p>
      We employ state-of-the-art technology for capturing fingerprint information, ensuring precision and efficiency. 
      Our equipment is expertly manufactured and maintained to uphold the highest standards of performance. 
      Accuracy is our foremost priority, and our team of Fingerprint Specialists, certified by the California Department of Justice, undergo rigorous training to ensure meticulous data collection. 
      Adhering strictly to DOJ guidelines, our specialists process fingerprint information with utmost care and attention to detail. 
      Our highly trained fingerprint technicians expertly roll fingerprints and electronically transmit application data for comprehensive criminal history background checks and clearance purposes.
      </p>
    </div>
  </div>
  </>
  );
}

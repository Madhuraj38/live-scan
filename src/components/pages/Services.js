import React from 'react';
import '../../App.css';
import '../Cards.css';
import HeroSectionServices from '../HeroSection_Services';

export default function Services() {
  return (
    <>
    <HeroSectionServices />

    {/* <div className='about'>
        <h1>Services</h1>
        <br/>
        <p>
        Our state of the art live scan fingerprinting system can digitally scan and capture your fingerprints, and then immediately transmit them electronically to the California State Department of Justice in Sacramento. You can walk in for service any time during business hours without an appointment. If you are located in San Mateo, Fremont, Burlingame, Redwood City, Foster City, Campbell, Union City, Pleasanton, Livermore, or any other location, you can also benefit from our mobile live scan fingerprint service.
        </p>
    </div> */}

<div className='aboutus'>
  <div className='head'>
      <h1>Services</h1>
    </div>
  </div>
    <div className='service'>
    {/* <h1>Services</h1> */}
        <p>Our fingerprinting service encompasses both electronic and traditional methods of capturing and submitting fingerprints.</p>
        <div className='Grid'>
          <div className='left'>
            <img style={{borderRadius:'10px'}} src='/images/dig-scan.jpg' />
          </div>
          <div className='right'>
            <div className='inner-content'>
                <h4>Computer Based Live Scan Fingerprint</h4>
                <p>The Live Scan fingerprinting system involves capturing fingerprints directly into a digital format, replacing traditional ink and paper methods.
                   These systems have advanced from standalone devices to integrated systems connected to secure databases. Images can be captured, transmitted, 
                   and interfaced with Automated Fingerprint Identification Systems (AFIS) for identification processing. 
                   This method is cleaner, faster, and less prone to errors compared to traditional methods.</p>
            </div>
          </div>
        </div>
        <div className='Grid'>
          <div className='left'>
            <div className='inner-content'>
                <h4>Ink Fingerprint</h4>
                <p>Ink fingerprints are commonly known as "hard card" fingerprints or FBI FD-258 card fingerprints. We maintain a substantial stock of authentic FBI FD-258 fingerprint cards. 
                  If you do not possess your own fingerprint cards, we can provide them to you at no charge.

                  The U.S. Department of Justice sets forth guidelines and protocols for individuals seeking a copy of their own FBI Identification Record for review. 
                  These requests are processed by the FBI's Criminal Justice Information Services (CJIS) Division.
                </p>
            </div>
          </div>
          <div className='right'>
            <img style={{borderRadius:'10px'}} src='/images/ink-scan.jpg' />
          </div>
        </div>
      </div>
      {/* <div className='about'>
        <h1>Fees</h1>
        <br/>
        <p>
        Our transparent fee structure ensures you have a clear understanding of the costs involved. Our fingerprint rolling fees is only $14.99. Additional processing fees are required for state Department of Justice (DOJ) and FBI level criminal history records checks. Other fees may also be required.
        </p>
      </div> */}
    <div className='accounts'>
    <h1>Payment options</h1>
    <div className='account-text'>
      <h4>Upon completion of the Services Agreement, we offer monthly invoicing for your convenience. Following this, we will provide your company with a payment voucher, authorizing the fees to be charged to your account.</h4>
    </div>
    <div className='account-text'>
      <h4>Credit Card on File is an option as well as Employee Pays Special Discount Pricing. Contact us for details.</h4>
    </div>
    <div className='account-text'>
      <p>We specialize in assisting HR departments with fingerprint background checks, helping to alleviate their workload. 
        Our commitment to excellence has led us to be selected by State Agencies for beta testing new programs before implementation. 
        Rest assured, we adhere strictly to all laws, policies, and procedures in alignment with law enforcement processes.
      </p>
    </div>
    <div className='account-text'>
      <p>
      we are the finger printing experts, so you don’t have to worry about a thing! We provide 5-star hospitality customer service, 
      ensuring a seamless experience for our clients. With our industry expertise, we aim to simplify your tasks by proactively handling background follow-ups, relieving HR of unnecessary burdens. 
      Our efficient service ensures that customers are in and out in minutes!
      </p>
      </div>
    </div>
    </>
  );
}

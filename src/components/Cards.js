import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import GoogleMapReact from 'google-map-react';
// import Box from '@mui/system/Box';
import { Box, Button, Grid } from '@mui/material';
import GoogleMapComponent from './GoogleMapComponent';
import { Link } from 'react-router-dom';

function Cards() {
  const handleClick = () => {
    // Redirect to another page
    // history.push('/about-us');
    <Link to='/about-us'/>
  };
  return (
    <>
      <div className='cards'>
        <h1>We Offer</h1>
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
                title='Mobile Services'
                text='Unlock the full potential of your mobile devices with our expert mobile services! From repairs to software updates, 
                we have got you covered. Fast, reliable, and tailored to your needs. Stay connected effortlessly!'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/Walkin.jpg'
                title='Notary'
                text='Ensure the authenticity of your important documents with our professional notary services. Our experienced notaries are here to assist you with legalizing, 
                certifying, and validating documents. Trust us for secure and reliable notary services.'
                link='https://www.mailallcenter.com/'
              />
              <CardItem
                src='images/Appointment.jpg'
                title='Passport'
                text='Embark on your next adventure hassle-free! Our passport services are designed to make the application and renewal process seamless. 
                Let us handle the details, so you can focus on planning your travels. Your passport journey starts here!'
                link='https://www.mailallcenter.com/'
              />
              <CardItem
                src='images/Payment.jpg'
                title='Pack & Ship'
                text='Reliable packing and shipping solutions tailored to your needs. Whether it is a small package or a larger shipment, 
                we ensure your items reach their destination safely and on time. Ship with confidence, entrust your parcels to us!'
                link='https://www.mailallcenter.com/'
              />
            </ul>
          </div>
        </div>
      </div>
      <div className='about'>
        <h1>Live Scan</h1>
        <Box component="section" sx={{
          width: '50%',
          borderRadius: 1,
          bgcolor: 'white',
          '&:hover': {
            bgcolor: '#9ccaca33',
          },
          padding: '1rem',
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 0px #0D3056CC'
        }}>
        <p style={{padding:'20px'}}>Our organization holds official authorization from the Department of Justice 
        and is certified by the FBI as a fingerprinting service provider. We specialize 
        in capturing and submitting fingerprints electronically or via ink. Our services 
        cater to various needs, including licensure, certification, volunteering, employment, 
        business permits, record reviews, immigration clearances, and other licensing or 
        employment purposes.</p>
        <br/>
        <Button variant="contained" color="primary" onClick={handleClick} sx={{padding: '10px 20px',bgcolor:'skyblue'}}>
          About Us
        </Button>
        </Box>
      </div>
      <div className='service'>
        <h1>Services</h1>
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
      <div className='documents'>
        < h1>Documents Required</h1>
        <List
          sx={{ width: '100%', maxWidth: 360, opacity:0.9, bgcolor:'#ebe5e5',borderRadius: '10px'}}
          aria-label="docs"
        >
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <DocumentScannerIcon />
              </ListItemIcon>
              <ListItemText primary="Live Scan Fingerprint request form" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
            <ListItemIcon>
                <DocumentScannerIcon />
              </ListItemIcon>
              <ListItemText primary="Valid ID" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem >
            <ListItemButton>
            <ListItemIcon>
                <DocumentScannerIcon />
              </ListItemIcon>
              <ListItemText primary="Photo" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
            <ListItemIcon>
                <DocumentScannerIcon />
              </ListItemIcon>
              <ListItemText primary="Signature" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
            <ListItemIcon>
                <DocumentScannerIcon />
              </ListItemIcon>
              <ListItemText primary="Date of Birth" />
            </ListItemButton>
          </ListItem> */}
        </List>
      </div>
      {/* <div>
        <div style={{ height: '400px', width: '100%' }}>
          <GoogleMapComponent />
        </div>
      </div> */}
      
      

      <div className='Faq'>
        <h1>FAQ</h1>
        <p>Find the answers to common questions for Live Scan and our services.</p>
        <div className='accordion'>
          <Accordion className='accordion_item'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>What is Live Scan?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Live Scan is an electronic fingerprinting process used to capture fingerprints digitally instead 
              of using traditional ink and paper. It is commonly used for background checks, employment screening, licensing, 
              and certification purposes.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accordion_item'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Who needs to undergo Live Scan?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Individuals who require a background check for employment, licensing, certification, or volunteer work may be required to undergo Live Scan fingerprinting. This includes teachers, healthcare professionals, security guards, real estate agents, and many other professions.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accordion_item'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How does Live Scan work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              During the Live Scan process, an individual's fingerprints are digitally captured using a specialized scanner. The fingerprints are then transmitted electronically to the appropriate government agency or law enforcement database for background checks.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accordion_item'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Can I make an appointment for live scan or just walk in?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              No appointment is needed. Walk-ins are welcome during our normal business hours Monday through Friday from 10am-5pm. As a walk-in customer you will be live scanned on a first come first serve basis. For groups of more than 2, we prefer you set up an appointment in order to avoid possible wait time.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accordion_item'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Is Live Scan fingerprinting the same as a background check?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              No, Live Scan fingerprinting is the process of capturing fingerprints digitally, while a background check involves the analysis of those fingerprints and other relevant information to determine an individual's criminal history or eligibility for employment or licensing.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accordion_item'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Is Live Scan fingerprinting secure?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Yes, Live Scan fingerprinting is a secure and reliable method for capturing fingerprints. The digital fingerprint images are encrypted and transmitted securely to ensure the privacy and integrity of the information.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accordion_item'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>What happens if my fingerprints are rejected?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Sometimes, fingerprints may be declined due to factors beyond our influence. Common reasons include the presence of characteristics that are challenging to capture during the live scan process, such as cuts, scars, or calluses. If an applicant's fingerprints are rejected for these reasons and were initially scanned by our agency, we will gladly rescan the fingerprints at no extra cost.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accordion_item'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Is it necessary to undergo Live Scan fingerprinting again if I've already completed it in the past?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Yes, you must. The Department of Justice (DOJ) does not share fingerprint information with other agencies due to legal constraints on sharing confidential results. Each Live Scan application serves as authorization for a criminal history response to be transmitted solely to the designated requesting entity. As a result, a new application is required for each criminal history inquiry, necessitating a fresh Live Scan process. Previous Live Scan data cannot be reused. Additionally, individuals working in the public school system must undergo Live Scan fingerprinting each time they change employers.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accordion_item'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How much does your service cost?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              The cost of services generally average $14.99 but it is dependent on the requesting agency. For example, there are added fees for FBI or DOJ if required.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* <Button variant="contained" color="primary" onClick={handleClick} sx={{marginTop:'20px'}}>
          View More
          </Button> */}
        </div>
      </div>
    </>
  );
}

export default Cards;

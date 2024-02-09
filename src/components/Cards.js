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
// import Box from '@mui/system/Box';
import { Box, Button } from '@mui/material';
import GoogleMapComponent from './GoogleMapComponent';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <>
      <div className='cards'>
        <h1>We Offer</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/icons/walk-in.png'
                title='Walk In'
                text='We provide the convenience of a walk-in facility, 
                allowing you to visit us during office hours without the need for a prior appointment.'
              />
              <CardItem
                src='images/icons/booking.png'
                title='Appointments'
                text='For privacy, appointments are offered upon request and 
                are also available outside of regular office hours.'
                path='/contact-us'
              />
              <CardItem
                src='images/icons/help.png'
                title='Mobile Services'
                text='Conveniently get your livescan and documents notarized at your location. 
                Enjoy the ease of our mobile service, tailored to your busy schedule. We offer group discounts and accommodate non-profit organizations for added affordability and accessibility.'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/icons/certificate.png'
                title='Notary'
                text='Ensure the authenticity of your important documents with our professional notary services. Our experienced notaries are here to assist you with legalizing, 
                certifying, and validating documents. Trust us for secure and reliable notary services.'
                path='https://www.mailallcenter.com/'
              />
              <CardItem
                src='images/icons/passport.png'
                title='Passport'
                text='Embark on your next adventure hassle-free! Our passport services are designed to make the application and renewal process seamless. 
                Let us handle the details, so you can focus on planning your travels. Your passport journey starts here!'
                path='https://www.mailallcenter.com/'
              />
              <CardItem
                src='images/icons/delivery.png'
                title='Pack & Ship'
                text='Reliable packing and shipping solutions tailored to your needs. Whether it is a small package or a larger shipment, 
                we ensure your items reach their destination safely and on time. Ship with confidence, entrust your parcels to us!'
                path='https://www.mailallcenter.com/'
              />
            </ul>
          </div>
        </div>
      </div>
      <div className='about1'>
        <h1>LiveScan Express Hub</h1>
        <Box component="section" sx={{
          width: '50%',
          bgcolor: 'white',
          // '&:hover': {
          //   bgcolor: '#9ccaca33',
          // },
          padding: '1rem',
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // border: '1px solid',
          borderRadius: '10px',
          '@media (max-width: 768px)': {
            width: '100%', 
          },
          // boxShadow: '0px 0px 10px 0px #0D3056CC'
        }}>
        <p style={{padding:'20px',
      '@media (max-width: 768px)': {
        padding: '10px', 
        fontSize: '14px', 
      },}}>Our organization holds official authorization from the Department of Justice 
        and is certified by the FBI as a fingerprinting service provider. We specialize 
        in capturing and submitting fingerprints electronically or via ink. Our services 
        cater to various needs, including licensure, certification, volunteering, employment, 
        business permits, record reviews, immigration clearances, and other licensing or 
        employment purposes.</p>
        <br/>
        <Link to='/about-us'><Button variant="contained" color="primary" sx={{padding: '10px 20px',bgcolor:'skyblue',
      '@media (max-width: 768px)': {
        padding: '8px 16px', 
        fontSize: '14px', 
      },}}>
          About Us
        </Button>
        </Link>
        </Box>
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
              <ListItemText primary="Our Fingerprint request form" />
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
      <div className='customers'>
        <h1> Our Customers</h1>
        <p>At LiveScan Express Hub, we're the experts in fingerprinting, so you don't need to worry about a thing! 
          From education and employment to business, travel, volunteering, and legal requirements, 
          just about everyone in America will need fingerprinting services at some point. 
          Our customers come to us for background checks in various fields and areas, including :
        </p>
        <div className='list'>
          <div className='col-0'>
            <ul>
              <li>Accounting professionals</li>
              <li>Adoption</li>
              <li>Athletic Trainers</li>
              <li>ATF (Alcohol, Tobacco and Firearms)</li>
              <li>Bar examination</li>
              <li>Board of Long Term Examiners</li>
              <li>Bureau of Alcohol & Drug Abuse</li>
              <li>Bus Drivers</li>
              <li>Cannabis Compliance Board</li>
              <li>Charter Schools</li>
              <li>Child Care</li>
              <li>Chiropratic Examiners</li>
              <li>City or County Employment</li>
              <li>Contractors</li>
              <li>CPA</li>
              <li>Dentists and Dental Hygienists</li>
              <li>Department of Agriculture Employment</li>
              <li>Department of Motor Vehicles</li>
              <li>Department of Wildlife</li>
            </ul>
          </div>
          <div className='col-1'>
            <ul>
              <li>Disability Care</li>
              <li>Dietitian</li>
              <li>Document Prep</li>
              <li>Elderly Care Employees</li>
              <li>Emergency Medical Systems</li>
              <li>Escrow Title Officers</li>
              <li>Foster Parents</li>
              <li>FFL (Federal firearm License)</li>
              <li>Gaming License or Employment</li>
              <li>HCQC</li>
              <li>Home Healthcare Agencies</li>
              <li>Housing Authority Employment or Application</li>
              <li>Immigration</li>
              <li>Insurance Inspectors and Officers</li>
              <li>Kinship Care</li>
              <li>Labor Commissioners</li>
              <li>Limo Drivers</li>
              <li>Lawyers/State Bar</li>
              <li>Long-term Care Administrators</li>
            </ul>
          </div>
          <div className='col-2'>
            <ul>
              <li>Manufactured Housing</li>
              <li>Masage Therapist</li>
              <li>Mortgage Professionals</li>
              <li>Nursing License</li>
              <li>Osteopathic Physicians</li>
              <li>Pharmacy Technicians</li>
              <li>Physical Therapists and Assistants</li>
              <li>Post-Secondary Education</li>
              <li>Private Investigators</li>
              <li>Private and Charter Schools</li>
              <li>Psychology</li>
              <li>Real Estate Professionals</li>
              <li>School-district Employment</li>
              <li>Sealing Criminal Records</li>
              <li>Security Guards</li>
              <li>Social Workers</li>
              <li>Taxicab Drivers</li>
              <li>Teaching License</li>
              <li>Traveling Outside USA</li>
              <li>Volunteers</li>
            </ul>
          </div>
        </div>
      </div>
      <div> 
        <div style={{ height: '500px', width: '100%', padding: '4rem 0rem 0rem 0rem', margin: '0 auto' }}>
          <GoogleMapComponent />
        </div>
      </div>
      
      

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

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
import { Box, Button } from '@mui/material';
import GoogleMapComponent from './GoogleMapComponent';

function Cards() {
  const handleClick = () => {
    // Redirect to another page
    // history.push('/about-us');
  };
  return (
    <>
      <div className='cards'>
        <h1>We Accept</h1>
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
      <div className='accordion'>
      <Accordion className='accordion_item'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_item'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion_item'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className='documents'>
        < h1>Documents Required</h1>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
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
          <ListItem >
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
          </ListItem>
        </List>
      </div>
      <div>
        <div style={{ height: '400px', width: '100%' }}>
          <GoogleMapComponent />
        </div>
      </div>
      
      <div className='about'>
        <h1>Live Scan</h1>
        <Box component="section" sx={{
          width: '50%',
          borderRadius: 1,
          bgcolor: 'white',
          '&:hover': {
            bgcolor: '#ede4e4',
          },
          padding: '1rem',
          marginTop: '30px'
        }}>
        Our organization holds official authorization from the Department of Justice 
        and is certified by the FBI as a fingerprinting service provider. We specialize 
        in capturing and submitting fingerprints electronically or via ink. Our services 
        cater to various needs, including licensure, certification, volunteering, employment, 
        business permits, record reviews, immigration clearances, and other licensing or 
        employment purposes.
        <br/>
        <Button variant="contained" color="primary" onClick={handleClick} sx={{marginTop:'20px'}}>
          About Us
        </Button>
        </Box>
      </div>
    </>
  );
}

export default Cards;

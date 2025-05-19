import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './footer.css';
import FAQs from '../assets/FAQs.png';


export default function Footer() {
  return (
    <div className='outer-container'>
        <img src={FAQs} alt="" />
<div className='footerContainer {
' style={{ backgroundColor: 'black' }}>
      <Accordion sx={{backgroundColor: 'black', color: 'white', position: 'relative'}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='iconArrow' sx={{height: '40px', width: '40px'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{borderTopLeftRadius: '10px',
  border: '1px solid white', borderRadius: '10px' }}
        >
          <Typography component="span">Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{borderRadius: '10px'}}>
          Yes! It is 100% free, and has 0% ads!
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'black', color: 'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='iconArrow' sx={{height: '40px', width: '40px'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{borderTopLeftRadius: '10px',
  border: '1px solid white', borderRadius: '10px'}}
        >
          <Typography component="span">Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{borderRadius: '10px'}}>
          Sorry, unfortunately we don't provide the service to download any songs.
        </AccordionDetails>
      </Accordion>
      
    </div>
    </div>
    
  );
}

import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';

const Accordion = ({ expanded, onChange, children }) => (
  <Box
    width="100%"
    maxWidth="400px" 
    mx="auto" 
    mb={2} 
    boxShadow={1}
  >
    <MuiAccordion expanded={expanded} onChange={onChange}>
      {children}
    </MuiAccordion>
  </Box>
);

const AccordionSummary = ({ expanded, ...props }) => (
  <MuiAccordionSummary
    expandIcon={expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
    {...props}
  />
);

const AccordionDetails = (props) => (
  <MuiAccordionDetails {...props} />
);

export default function FAQs() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : '');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.paper"
      pt={8}
      pb={6}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Frequently Asked Questions
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Find answers to common questions
        </Typography>
      </Container>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What services do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a wide range of consultancy services, including business strategy, financial planning, and market analysis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How experienced is your team?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our team consists of experienced professionals with diverse backgrounds in various industries.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How can I get started?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To get started, simply contact us through our website or give us a call. We'll guide you through the process.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

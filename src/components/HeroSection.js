import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import image99 from '../imagesandvideos/herotrial2.jpg'; 

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image99})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '0.1',  
        color: 'black',
        padding: '100px 0',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Empowering Businesses Through Strategic Consultancy
        </Typography>
        <Typography variant="h6" paragraph>
          We provide tailored solutions that drive growth, innovation, and success.
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Container>

    </div>
  );
};

export default HeroSection;

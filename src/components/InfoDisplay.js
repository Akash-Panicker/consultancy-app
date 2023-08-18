import React from 'react';
import { Grid, Button } from '@mui/material';
import image4 from '../imagesandvideos/smallchartman.avif';
import image5 from '../imagesandvideos/vecteezy_creative-business-team-and-lightbulb-work-under-brilliant_17617566.jpg'
const InfoDisplay = () => {
  const containerStyle = {
    margin: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: '400px',
  };

  return (
    <div style={containerStyle}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img src={image5} alt="I1" style={imageStyle} />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="content">
            <h2>Unlocking Possibilities</h2>
            <h3>Collaboration for Innovation</h3>
            <p>
              Our expert consultants work hand in hand to turn your challenges into opportunities.
              With a dedicated focus on innovation, we ensure that every step forward is a step toward progress.
              Together, we make your vision a reality.
            </p>
            <Button>Learn More</Button>
          </div>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className="content">
            <h2>Empowering Success</h2>
            <h3>Data-Driven Strategies</h3>
            <p>
              Our data-driven consultancy strategies are designed to help your business thrive.
              With a keen eye for trends and insights, we guide you toward informed decisions.
              Your success is our focus, and we're here to help you navigate the path to growth.
            </p>
            <Button>Explore Services</Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={image4} alt="I2" style={imageStyle} />
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoDisplay;

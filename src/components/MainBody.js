import React from 'react'
import ImageCarousel from './ImageCarousel';
import InfoDisplay from './InfoDisplay';
import Pricing from './Pricing';
import CustomerReviews from './CustomerReviews';
import FAQs from './FAQs';
import ContactForm from './ContactForm';
import HeroSection from './HeroSection';
const MainBody = () => {
  return (
    <div>
    <HeroSection/>
    <br></br><br></br>
      <ImageCarousel/>
      <InfoDisplay/>
      <Pricing />
      <CustomerReviews  />
      <FAQs/>
      <ContactForm />
      
    </div>
  )
}

export default MainBody

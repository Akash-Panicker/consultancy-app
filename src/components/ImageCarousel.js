import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import image4 from '../imagesandvideos/peoplesittingtogetherheader1.jpg'
import '../cssfiles/imagecarousel.css';
import image5 from '../imagesandvideos/header3.avif';
import image6 from '../imagesandvideos/header2.jpg';
import image7 from '../imagesandvideos/header4.jpg';
import image8 from '../imagesandvideos/lastheader.avif';

const ImageCarousel = () => {
  const carouselOptions = {
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      576: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  };

  const carouselItems = [
    { heading: 'Unlocking Opportunities', image: image4 },
    { heading: 'Global Perspective', image: image6 },
    { heading: 'Innovating Together', image: image5 },
    { heading: 'Data-Driven Insights', image: image7 },
    { heading: 'Navigating Growth', image: image4 },
    { heading: 'Empowering Businesses', image: image8 },
  ];

  return (
    <div className="carousel-container">
      <OwlCarousel autoplay={true} className="owl-theme" {...carouselOptions}>
        {carouselItems.map((item, index) => (
          <div className="item" key={index}>
            <h2 className="carousel-heading">{item.heading}</h2>
            <img src={item.image} alt={`Slide ${index}`} className="carousel-image" />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default ImageCarousel;

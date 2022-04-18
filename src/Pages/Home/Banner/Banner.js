import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import slide1 from '../../../images/banner/slide1.jpg'
import slide2 from '../../../images/banner/slide2.jpg'
import slide3 from '../../../images/banner/slide3.jpg'
import slide4 from '../../../images/banner/slide4.jpg'


const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img 
          className="d-block images"
          src={slide4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Wedding in France</h1>
          <p>DESTINATION PHOTOGRAPHER</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block images "
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block images"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;
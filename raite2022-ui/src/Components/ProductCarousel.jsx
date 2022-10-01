import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Gaeul from '../Assets/Images/gaeul.jpeg'
import Yujin from '../Assets/Images/yujin.jpeg'
import Rei from '../Assets/Images/rei.jpeg'

const ProductCarousel = () => {
    
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    
      return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='w-75 mx-auto'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Gaeul}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Yujin}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rei}
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
      )
      
}

export default ProductCarousel
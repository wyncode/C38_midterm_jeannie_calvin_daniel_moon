import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstImage from '../assets/images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
import secondImage from '../assets/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg';
import thirdImage from '../assets/images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg';
import video from '../assets/images/video.mp4';
function HomeCarousel() {
  return (
    <div id="carousel">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={secondImage} alt="First slide" />
          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>First slide label</h3>
            <p style={{ color: 'white' }}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={firstImage} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={thirdImage} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;

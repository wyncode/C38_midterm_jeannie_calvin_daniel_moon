import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import firstImage from '../assets/images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
import secondImage from '../assets/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg';
import thirdImage from '../assets/images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg';
import video from '../assets/images/video.mp4';

function HomeCarousel() {
  return (
    <div>
      <Jumbotron id="carousel">
        <Container>
          <h1 id="carouselT"> Got Tech Jobs?</h1>
          <p id="carouselST">Follow the link below to search.</p>
          <p>
            <Button id="homecarouselbutton" href="/resources">
              Resources
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default HomeCarousel;

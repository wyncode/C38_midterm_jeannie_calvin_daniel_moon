import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';

function HomeCarousel() {
  return (
    <div>
      <Jumbotron id="carousel">
        <Container>
          <h1 id="carouselT"> Got Tech Jobs?</h1>
          <p id="carouselST">Follow the link below to search.</p>
          <p>
            <Button id="button" variant="outline-primary" href="/searchforjobs">
              Job Search
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default HomeCarousel;

import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import video from '../assets/images/video.mp4';

function HomePgJumbo() {
  return (
    <Jumbotron id="homejumbo">
      <Container className="hometext">
        <h1> Want To Learn How To Code?</h1>
        <p>Click below to find some of the best resources to learn coding.</p>
        <p>
          <Button id="homebutton" href="/resources">
            Resources
          </Button>
        </p>
      </Container>
    </Jumbotron>
  );
}
export default HomePgJumbo;

import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function HomePgJumbo() {
  return (
<<<<<<< HEAD
    <Jumbotron fluid className="homejumbo">
      <Container className="homejumbotext">
      <div className="container">
        <h1> LEARN TO CODE</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
        <p>
          <Button id="button" variant="outline-primary" href="/resources">Resources</Button>
=======
    <Jumbotron id="homejumbo">
      <Container className="hometext">
        <h1> Want To Learn How To Code?</h1>
        <p>Click below to find some of the best resources to learn coding.</p>
        <p>
          <Button id="homebutton" href="/resources">
            Resources
          </Button>
>>>>>>> master
        </p>
        </div>
      </Container>
    </Jumbotron>
  );
}
export default HomePgJumbo;

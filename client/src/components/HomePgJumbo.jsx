import React from 'react';
import { Jumbotron, Container,} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function HomePgJumbo() {
  return (
    <Jumbotron fluid>
    <Container>
      <h1>LEARN HOW TO CODE!</h1>
      <p>
        This is a modified jumbotron that occupies the entire horizontal space of
        its parent.
      </p>
      <p>
        <Button variant="dark" href ="/resources">Resources</Button>
      </p>
    </Container>
  </Jumbotron>
  );
}
export default HomePgJumbo;
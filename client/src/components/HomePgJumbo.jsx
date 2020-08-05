import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function HomePgJumbo() {
  return (
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
        </p>
        </div>
      </Container>
    </Jumbotron>
  );
}
export default HomePgJumbo;

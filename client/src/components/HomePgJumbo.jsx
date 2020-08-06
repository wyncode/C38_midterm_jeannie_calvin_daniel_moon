import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function HomePgJumbo() {
  return (
    <Jumbotron
      id="homeJumbo"
      className="homejumbo"
      style={{ backgroundColor: 'white' }}
    >
      <Container className="homejumbotext">
        <div>
          <h1> Want To Learn How To Code?</h1>
          <p>Click below to find some of the best resources to learn coding.</p>
          <p>
            <Button id="button" variant="outline-primary" href="/resources">
              Resources
            </Button>
          </p>
        </div>
      </Container>
    </Jumbotron>
  );
}
export default HomePgJumbo;

import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function ResourceImage(props) {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Developers, Never Stop Learning</h1>
        <p>
          Every developer will want to live in this world ...and it's our job to
          build it.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default ResourceImage;

import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function ResourceImage(props) {
  return (
    <Jumbotron
      id="homeJumbo"
      className="homejumbo"
      style={{ backgroundColor: 'white' }}
    >
      <Container className="homejumbotext">
        <div>
          <h1> Developers, Never Stop Learning</h1>
          <p>
            Every developer will want to live in this world ...and it's our job
            to build it.
          </p>
        </div>
      </Container>
    </Jumbotron>
    // <Jumbotron id fluid style={{ backgroundColor: 'white' }}>
    //   <Container>
    //     <h1>Developers, Never Stop Learning</h1>
    //     <p>
    //       Every developer will want to live in this world ...and it's our job to
    //       build it.
    //     </p>
    //   </Container>
    // </Jumbotron>
  );
}

export default ResourceImage;

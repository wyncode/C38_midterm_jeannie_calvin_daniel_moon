import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const SearchContainerResult = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Job Title</h1>
        <h3>Job Location</h3>
        <h4>Company</h4>
        <p>
          Job Description:This is a simple hero unit, a simple jumbotron-style
          component for calling extra attention to featured content or
          information.This is a simple hero unit, a simple jumbotron-style
          component for calling extra attention to featured content or
          information.
        </p>
        <p>
          <Button variant="primary">Apply Here</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default SearchContainerResult;

import React from 'react';
import { Card } from 'react-bootstrap';

const SearchContainerCards = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Job Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Location</Card.Subtitle>
          <Card.Text>Company</Card.Text>
          <Card.Link href="#">Learn More</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchContainerCards;

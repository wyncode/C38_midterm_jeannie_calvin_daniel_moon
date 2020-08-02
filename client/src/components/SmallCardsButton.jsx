import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SmallCardsButton = () => {
  return (
    <div id="small-card-button">
      <div>
        <Card
          style={{
            width: '18rem'
          }}
        >
          <Card.Body>
            <Card.Title>Job Title</Card.Title>
            <Card.Text>Job Location</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SmallCardsButton;

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SmallCardsButton = ({ apiData }) => {
  console.log(apiData);
  function handleClick() {
    window.open(apiData?.url, '_blank');
  }
  return (
    <div id="small-card-button">
      <div>
        <Card
          id="cardsshadow"
          style={{
            width: '18rem',
            backgroundColor: 'white'
          }}
        >
          <Card.Body>
            <Card.Title>{apiData?.title}</Card.Title>
            <Card.Subtitle>{apiData?.company}</Card.Subtitle>
            <Card.Text>{apiData?.location}</Card.Text>
            <Button id="button" variant="outline-primary" onClick={handleClick}>
              Read More
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default SmallCardsButton;

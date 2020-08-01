import React from 'react';
import Card from 'react-bootstrap/Card';
import testImage from '../assets/images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg';
const LargeCard = () => {
  return (
    <div id="large-card">
      <Card className="bg-dark text-white">
        <Card.Img
          style={{
            backgroundColor: 'lightgray'
          }}
          src={testImage}
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title style={{ fontSize: 75, color: 'white' }}>
            Hundres of Jobs
          </Card.Title>
          <Card.Title style={{ fontSize: 70, color: 'white' }}>
            A Click Away
          </Card.Title>
          <Card.Text style={{ fontSize: 30, color: 'white' }}>
            Search for jobs near you.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default LargeCard;

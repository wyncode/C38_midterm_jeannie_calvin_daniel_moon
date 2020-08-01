import React from 'react';
import Card from 'react-bootstrap/Card';
import testImage from '../assets/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg';

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
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default LargeCard;

import React from 'react';
import Card from 'react-bootstrap/Card';
import testImage from '../assets/images/anastasia-zhenina-E4XARZNDjzI-unsplash.jpg';
const LargeCard = () => {
  return (
    <div id="large-card">
      <Card className="bg-dark text-white">
        <Card.Img
          id="searchimage"
          style={{
            backgroundColor: 'lightgray'
          }}
          src={testImage}
          alt="Card image"
        />

        <Card.ImgOverlay>
          <Card.Title id="searchmaintext">Hundreds of Jobs</Card.Title>
          <Card.Title id="searchmaintext2">A Click Away</Card.Title>
          <Card.Text id="searchmaintext3">Search for jobs near you.</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default LargeCard;

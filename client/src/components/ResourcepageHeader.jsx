import React from 'react';
import Card from 'react-bootstrap/Card';
import RhImage from '../assets/images/dhaval-parmar-dnPniNPUe4o-unsplash.jpg';
function ResourcepageHeader() {
  return (
    <div id="large-card">
      <Card className="bg-dark text-white">
        <Card.Img
          id="searchimage"
          style={{
            backgroundColor: 'lightgray'
          }}
          src={RhImage}
          alt="Card image"
        />

        <Card.ImgOverlay>
          <Card.Title id="searchmaintext">Looking to Learn?</Card.Title>
          <Card.Title id="searchmaintext2">We've Got Your Back</Card.Title>
          <Card.Text id="searchmaintext3">
            Search for resources near you.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default ResourcepageHeader;

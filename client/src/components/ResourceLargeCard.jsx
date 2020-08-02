import React from 'react';
import Card from 'react-bootstrap/Card';
import resourceImage from '../assets/images/alex-knight-2EJCSULRwC8-unsplash.jpg';

const ResourceLargeCard = () => {
  return (
    <div id="large-card">
      <Card className="bg-dark text-white">
        <Card.Img
          style={{
            backgroundColor: 'lightgray'
          }}
          src={resourceImage}
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

export default ResourceLargeCard;

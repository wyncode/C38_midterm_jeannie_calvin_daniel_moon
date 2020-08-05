import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const SmallCardsButton = ({ apiData }) => {

  return (
    <div id="small-card-button">
      <div>
        <Card
          id="cardsshadow"
          style={{
            width: '18rem'
          }}
        >
          <Card.Body>
            <Card.Title>{apiData?.title}</Card.Title>
            <Card.Subtitle>{apiData?.company}</Card.Subtitle>
            <Card.Text>{apiData?.location}</Card.Text>
            <Button id="button" variant="outline-primary">Go Somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SmallCardsButton;

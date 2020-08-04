import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const SmallCardsButton = ({ apiData }) => {
  // const [apiData, setApiData] = useState({});
  // let { id } = useParams();
  // useEffect(() => {
  //   console.log('I entered useEffect. Did it work?');
  //   axios
  //     .get(`/api/jobs`)
  //     .then((response) => {
  //       console.log(response);
  //       setApiData({jobeOne: response.data[0], jobTwo: response.data[1], jobThree: response.data[2], jobFour: response.data[3]})
  //       // setApiData(response.data[0]);
  //     });
  // }, []);
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
            <Button id="jobsearchbuttons">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SmallCardsButton;

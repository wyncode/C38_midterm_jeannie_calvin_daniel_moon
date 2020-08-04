import React, { useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { CardContext } from '../context/CardContext';
const SearchContainerCards = ({ title, location, company, result }) => {
  const { setInfo } = useContext(CardContext);
  const handleClick = () => {
    setInfo(result);
  };
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
          <Card.Text>{company}</Card.Text>
          <Card.Link onClick={handleClick} style={{ cursor: 'pointer' }}>
            More Info
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default SearchContainerCards;

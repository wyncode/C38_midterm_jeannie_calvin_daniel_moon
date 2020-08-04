import React from 'react';
import { Card } from 'react-bootstrap';

const SearchContainerCards = ({ title, location, company, url }) => {
  return (
    <div>
      <Card id="searchResultsCards">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
          <Card.Text>{company}</Card.Text>
          <Card.Link href={url} target="_blank">
            More Info
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchContainerCards;

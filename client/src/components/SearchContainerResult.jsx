import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const SearchContainerResult = ({ info }) => {
  return (
    <>
      {info ? (
        <div>
          <Jumbotron>
            <h1>{info.company}</h1>
            <p>{info.title}</p>
            <p>{info.description.replace(/<\/?[^>]+>/gi, '')}</p>
          </Jumbotron>
        </div>
      ) : (
        <div>
          <Jumbotron id="searchJumbo">
            <h1>Want to Learn More About a company?</h1>
            <p>
              Click on a card to read an in depth description about the
              company/position
            </p>
          </Jumbotron>
        </div>
      )}
    </>
  );
};

export default SearchContainerResult;

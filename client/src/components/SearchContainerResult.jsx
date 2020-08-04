import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
const SearchContainerResult = ({ info }) => {
  return (
    <>
      {info ? (
        <div>
          <Jumbotron>
            <h1>{info.company}</h1>
            <p>{info.title}</p>
            <p>{info.description.replace(/<\/?[^>]+>/gi, '')}</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </div>
      ) : (
        <div>
          <Jumbotron id="searchJumbo">
            <h1>Want to Learn More About a company?</h1>
            <h5>
              Search above and click more info on a job result to load a full
              description here.
            </h5>
          </Jumbotron>
        </div>
      )}
    </>
  );
};
export default SearchContainerResult;

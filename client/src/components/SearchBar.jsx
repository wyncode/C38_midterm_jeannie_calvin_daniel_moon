import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <div id="search-bar">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Search
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Large"
          aria-describedby="inputGroup-sizing-large"
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;

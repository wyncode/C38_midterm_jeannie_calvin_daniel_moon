import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">
          Default
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
  );
};

export default SearchBar;

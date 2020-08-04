import React, { useState, useContext } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import axios from 'axios';
import { CardContext } from '../context/CardContext';
const SearchBar = ({ inputSearch, setInputSearch, setResults }) => {
  const { setInfo } = useContext(CardContext);
  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`/api/jobs/${inputSearch}`).then((response) => {
      console.log(response);
      setResults(response.data);
      setInfo(null);
    });
  };
  return (
    <div id="search-bar">
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Search
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={handleChange}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-large"
          />
        </InputGroup>
      </Form>
    </div>
  );
};
export default SearchBar;

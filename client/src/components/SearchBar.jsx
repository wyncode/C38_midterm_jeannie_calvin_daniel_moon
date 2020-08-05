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
          <InputGroup.Prepend></InputGroup.Prepend>
          <FormControl
            onChange={handleChange}
            placeholder="Search by Location or Coding Language"
          />
        </InputGroup>
      </Form>
    </div>
  );
};
export default SearchBar;

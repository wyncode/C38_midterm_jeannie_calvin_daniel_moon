import React, { useContext } from 'react';
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
    const form = e.target;
    axios.get(`/api/jobs/${inputSearch}`).then((response) => {
      console.log(response);
      setResults(response.data);
      setInfo(null);
      form.reset();
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

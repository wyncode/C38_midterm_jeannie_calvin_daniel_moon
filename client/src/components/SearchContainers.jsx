import React from 'react';
import SearchContainerCards from './SearchContainerCards';
import SearchContainerResult from './SearchContainerResult';
const SearchContainers = () => {
  return (
    <div id="search-containers">
      <div id="search-left">
        <SearchContainerCards />
        <SearchContainerCards />
        <SearchContainerCards />
        <SearchContainerCards />
        <SearchContainerCards />
        <SearchContainerCards />
      </div>

      <div id="search-right">
        <SearchContainerResult />
      </div>
    </div>
  );
};
export default SearchContainers;

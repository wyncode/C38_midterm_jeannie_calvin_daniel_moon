import React from 'react';
import SearchContainerCards from './SearchContainerCards';
import SearchContainerResult from './SearchContainerResult';
const SearchContainers = ({ results }) => {
  return (
    <div id="search-containers">
      <div id="search-left">
        {results?.map((result) => {
          return (
            <SearchContainerCards
              key={result.id}
              title={result.title}
              company={result.company}
              url={result.url}
              location={result.location}
            />
          );
        })}
        {/* <SearchContainerCards />
        <SearchContainerCards />
        <SearchContainerCards />
        <SearchContainerCards />
        <SearchContainerCards />
        <SearchContainerCards /> */}
      </div>

      <div id="search-right">
        <SearchContainerResult />
      </div>
    </div>
  );
};
export default SearchContainers;

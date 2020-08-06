import React, { useContext } from 'react';
import SearchContainerCards from './SearchContainerCards';
import SearchContainerResult from './SearchContainerResult';
import { CardContext } from '../context/CardContext';

const SearchContainers = ({ results }) => {
  const { info } = useContext(CardContext);
  return (
    <div id="search-containers">
      <div id="search-left">
        {results?.map((result) => {
          return (
            <div key={result.id}>
              <SearchContainerCards
                result={result}
                description={result.description}
                title={result.title}
                company={result.company}
                url={result.url}
                location={result.location}
              />
            </div>
          );
        })}
      </div>
      <div id="search-right">
        <SearchContainerResult info={info} />
      </div>
    </div>
  );
};
export default SearchContainers;

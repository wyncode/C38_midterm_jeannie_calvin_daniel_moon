import React from 'react';
import LargeCard from './LargeCard';
// import SearchBar from "./SearchBar"
import SmallCardsButton from './SmallCardsButton';
import SearchBar from './SearchBar';
const JobSearch = () => {
  return (
    <div>
      <LargeCard />
      <SearchBar />
      <h1 id="card-title">Trending Jobs</h1>
      <div id="cards">
        <SmallCardsButton />
        <SmallCardsButton />
        <SmallCardsButton />
        <SmallCardsButton />
      </div>
    </div>
  );
};

export default JobSearch;

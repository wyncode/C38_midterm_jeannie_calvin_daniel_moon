import React, { useState, useEffect } from 'react';
import LargeCard from './LargeCard';
import SmallCardsButton from './SmallCardsButton';
import SearchBar from './SearchBar';
import SearchContainers from './SearchContainers';
import video from '../assets/images/video.mp4';
import axios from 'axios';

const JobSearch = () => {
  const [apiData, setApiData] = useState({});
  const [inputSearch, setInputSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log('I entered useEffect. Did it work?');
    axios.get(`/api/jobs`).then((response) => {
      console.log('start response');
      console.log(response);
      console.log('end response');
      setApiData({
        jobOne: response.data[1],
        jobTwo: response.data[2],
        jobThree: response.data[3],
        jobFour: response.data[4]
      });
    });
  }, []);
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          width: '100%',
          height: 'fill',
          objectFit: 'fill',
          zIndex: '-2'
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <LargeCard />
      <SearchBar
        setResults={setResults}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      />
      <SearchContainers results={results} setResults={setResults} />
      <h1 id="search-page-card-title">Trending Jobs</h1>
      <div id="cards">
        <SmallCardsButton apiData={apiData.jobOne} />
        <SmallCardsButton apiData={apiData.jobTwo} />
        <SmallCardsButton apiData={apiData.jobThree} />
        <SmallCardsButton apiData={apiData.jobFour} />
      </div>
    </div>
  );
};
export default JobSearch;

import React from 'react';
import HomeCarousel from '../components/Carousel';
import SmallCardsButton from '../components/SmallCardsButton';
import HomePgJumbo from '../components/HomePgJumbo';

function Home() {
  return(
    <div>
    <HomeCarousel />
    <div id= "cards">
    <SmallCardsButton />
    <SmallCardsButton />
    <SmallCardsButton />
    <SmallCardsButton />
    </div>
    <div id = "homePgJumbo">
    <HomePgJumbo />
    </div>
    </div>
  )};


export default Home;

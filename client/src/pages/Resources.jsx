import React from 'react';
import ResourceCardDeck from '../components/ResourceCardDeck';
import Resource3Cards from '../components/Resource3Cards';
import ResourceImage from '../components/ResourceImage';
import cards1 from '../assets/images/cards1.jpg';
import ResourcepageHeader from '../components/ResourcepageHeader';
import Footer from '../components/Footer';

function Resources() {
  return (
    <div>
      <ResourcepageHeader />
      <Resource3Cards />
      <ResourceImage />
      <ResourceCardDeck />
    </div>
  );
}

export default Resources;

import React from 'react';
import ResourceCardDeck from '../components/ResourceCardDeck';
import Resource3Cards from '../components/Resource3Cards';
import ResourceImage from '../components/ResourceImage';
import ResourceLargeCard from '../components/ResourceLargeCard';

function Resources() {
  return (
    <div>
      <ResourceLargeCard />
      <Resource3Cards />
      <ResourceImage />
      <ResourceCardDeck />
    </div>
  );
}

export default Resources;

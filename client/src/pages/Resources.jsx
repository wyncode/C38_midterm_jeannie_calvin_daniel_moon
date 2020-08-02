import React from 'react';
import ResourceCardDeck from '../components/ResourceCardDeck';
import Resource3Cards from '../components/Resource3Cards';
import ResourceImage from '../components/ResourceImage';

function Resources() {
  return (
    <div>
      <h1>Resources Page</h1>
      <Resource3Cards />
      <ResourceImage />
      <ResourceCardDeck />
    
    </div>
  );
}

export default Resources;

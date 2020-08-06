import React from 'react';
import ResourceCardDeck from '../components/ResourceCardDeck';
import Resource3Cards from '../components/Resource3Cards';
import ResourceImage from '../components/ResourceImage';
import ResourcepageHeader from '../components/ResourcepageHeader';
import Footer from '../components/Footer';
import video from '../assets/images/video.mp4';

function Resources() {
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
      <ResourcepageHeader />
      <Resource3Cards />
      <ResourceImage />
      <ResourceCardDeck />
    </div>
  );
}

export default Resources;

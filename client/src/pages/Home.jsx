import React from 'react';
import HomeCarousel from '../components/Carousel';
import HomeCards from '../components/HomeCards';
import HomePgJumbo from '../components/HomePgJumbo';
import video from '../assets/images/video.mp4';

function Home() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          width: '100%',
          objectFit: 'fill',
          zIndex: '-2'
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <HomeCarousel />
      <HomeCards />
      <HomePgJumbo />
    </div>
  );
}
export default Home;

import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    console.log('mounted');
  }, []);

  return <div style={{ marginTop: '10rem' }}>Home Page</div>;
}

export default Home;

import React from 'react';
import video from '../assets/images/video.mp4';
function Video() {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;

import React from 'react';
import fashionvideo from './fashionvideo.mp4';
import './headervideo.css'

function VideoHeader() {
  return (
    <div id='headervideo'>
      <video width='100%'  autoPlay loop>
        <source src={fashionvideo} type='video/mp4' />
        {/* Add more <source> elements for different video formats if needed */}
      </video>
      <button className='videobutton phonesize'>fume.</button>
    </div>
  );
}

export default VideoHeader;

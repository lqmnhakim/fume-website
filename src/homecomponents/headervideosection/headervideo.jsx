import React from 'react';
import fashionvideo from './fashionvideo.mp4';
import './headervideo.css'
import videoreplacer from './videoreplacer.jpg'

function VideoHeader() {
  return (
    <div id='headervideo'>
      <video className='videotopmain' width='100%'  autoPlay loop>
        <source src={fashionvideo} type='video/mp4' />
        {/* Add more <source> elements for different video formats if needed */}
      </video>
      <img className='videoreplacerpic' src={videoreplacer}></img>
      <button className='videobutton phonesize'>fume.</button>
    </div>
  );
}

export default VideoHeader;

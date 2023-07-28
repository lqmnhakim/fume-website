
import './instasect.css'
import React, { useState, useEffect } from 'react';

const InstagramPhotos = () => {
  const userAccessToken = 'IGQVJYdURUT1dWZAGdHX0JFQTIyaTZAYZAkU0eUFKaWlMUDI1QXVKWXZAwdk5zM09Xa0RSMG9BaEdQZAV9kdmIxLXFIR2FxYkRzZA2hmblZA1RncxUkNPVDRzRU5iYUFOZAWwzZAm12emdVaWozUms5cklUQ2JCcgZDZD';
  const numPhotos = 3;
  const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,likes&access_token=${userAccessToken}&limit=${numPhotos}`;

  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setPhotosData(data.data);
      } catch (error) {
        console.error('Error fetching Instagram photos:', error);
      }
    };

    fetchInstagramData();
  }, []);

  return (
    <div className='instagrambox'>
      {photosData.map((photo) => (
        <div className='minibox' key={photo.id}>
          <a href={photo.permalink} target="_blank">
            <img className='instaimage' src={photo.media_url} alt={photo.caption} />
          </a> 
          <p> ❤︎ {photo.likes ? photo.likes.summary.total_count : ' Hidden'}</p>
          <p>{photo.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramPhotos;


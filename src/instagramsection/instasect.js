
import './instasect.css'
import React, { useState, useEffect } from 'react';

const InstagramPhotos = () => {
  const userAccessToken = 'IGQVJYOGdpbUp4RlZA5RE03T3JDM2FTZA0pkc0pCNWVpZA2F0dWpYVGVVLW5IcG5kdkZAaV1R2M3VGQ19EZA0hreGI3d0YzQktFQjktMGtPbHU1bHJTRTd6NWc1MlJpbE5DdGhPYXZAJUFNEYjRyWnZAIMzZA3cQZDZD';
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


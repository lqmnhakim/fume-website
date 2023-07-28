
import './instasect.css'
import React, { useState, useEffect } from 'react';

const InstagramPhotos = () => {
  const userAccessToken = 'IGQVJVY1o5Q29CZAWdNdzdiT08wNWd1c2hSLWZAtWWl2Sl9PbFVwWHZAvMUd0ZAm9IS3dTSDB2emNUNTZArWkxSRkR2LXpQMmV1ZAHhrZAEUwTFZAxWkRTcmJZAV284a1ppWTNiNVdVeVNueS1VRXpTUEVWYmY5VgZDZD';
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


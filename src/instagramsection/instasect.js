import React, { useState, useEffect } from 'react';
import './instasect.css'

const InstagramPhotos = () => {
  const userAccessToken = 'IGQVJWWVhib1E1Y0RrYlZA0WXVIYnBET21tWmdJN1pLV21tSjBpclpKMVVad0JLU3V4NFFjZA1F5SEpqejRickEtem02c3FqZAGFoWlplSFljX25hTjJLaXdGZADZAfZAEktM3NWNHJFalFKUkJsRWdYT3FTMwZDZD';
  const numPhotos = 4;
  const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,likes,username&access_token=${userAccessToken}&limit=${numPhotos}`;

  const [photosData, setPhotosData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setPhotosData(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Instagram photos:', error);
        setLoading(false);
      }
    };

    fetchInstagramData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!photosData || photosData.length === 0) {
    return <p>No photos to display.</p>;
  }

  return (
    <div className='instaboxpicture'>

      {photosData.map((photo) => (
        <div className='hvrinsta' key={photo.id}>
          <a href={photo.permalink} target="_blank">
            <img className='hvrbox' src={photo.media_url} alt={photo.caption} />
          </a>
          <div>
          <p><b>@{photo.username}</b> - {photo.caption ? photo.caption : 'No caption'} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramPhotos;






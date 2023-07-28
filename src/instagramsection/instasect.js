import React, { useState, useEffect } from 'react';
import './instasect.css'

const InstagramPhotos = () => {
  const userAccessToken = 'IGQVJWWGlkZAC1CYUxOMHlsY2xfMzRpWVdHR3ZA4VS1kWXFfR095dWgyeUJscWVYelJ2UlB6Yk1zQjlfSkV4V0prSEVtSXpWelllazJ6TVBmSm9QVFdycGU5MV83YkhCM0hPMWphQnkwY3ZACZAHB6MW9iRwZDZD';
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






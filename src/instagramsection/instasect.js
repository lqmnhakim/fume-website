import React, { useEffect, useState } from 'react';
import axios from 'axios';

const token = 'IGQVJVaDdpa3RReHhmbU5OdDdxeG1mb1lRNHEwR05vOWlZAVXJma0lBU19kZAjJEVmczWUFsWG1DeWIxR1ZAIRWJJVmJHMG9aeGx6ZAl9nZAElCb2hfT2kzcFd4c0FfbklPcXMwVjVCbGxidHFydHBxNVlUbQZDZD'; // Your access token here
const numPhotos = 5;

const InstagramPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    
    const apiUrl = `https://api.instagram.com/users/self/media/recent?access_token=${token}&count=${numPhotos}`;

    axios.get(apiUrl)
      .then(response => {
        const data = response.data;
        setPhotos(data.data);
      })
      .catch(error => {
        console.error('Error fetching Instagram photos:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <a target="_blank" rel="noopener noreferrer" href={photo.link}>
              <img src={photo.images.low_resolution.url} alt="Instagram Photo" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default InstagramPhotos;
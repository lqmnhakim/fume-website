// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const token = 'IGQVJXOTYzeGZAacjF3VF90RURrc2g0aWhYQXFBNXJJOTFOLVhjZAll0NkxFcXJRVDYtM3ZAERnRmdlFOUTl5OEJBV1BFcmFHMVBBajkwTGtINGxtMnpqSE41WElDbDZAYVlA4NXVaYzBUc183SklWNWVoYgZDZD'; // Your access token here
// const numPhotos = 5;

// const InstagramPhotos = () => {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
    
//     const apiUrl = `https://api.instagram.com/users/self/media/recent?access_token=${token}&count=${numPhotos}`;

//     axios.get(apiUrl)
//       .then(response => {
//         const data = response.data;
//         setPhotos(data.data);
//       })
//       .catch(error => {
//         console.error('Error fetching Instagram photos:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <ul>
//         {photos.map(photo => (
//           <li key={photo.id}>
//             <a target="_blank" rel="noopener noreferrer" href={photo.link}>
//               <img src={photo.images.low_resolution.url} alt="Instagram Photo" />
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// };

// export default InstagramPhotos;
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SongsHeroSection from '../songsPage/hero';
import SwiperCards from '../components/swiper'

function AlbumPage() {
  const { id } = useParams(); // Get the album ID from the URL
  const location = useLocation(); // Access the location object
  const albumData = location.state?.item; // Retrieve the item from the state

  if (!albumData) {
    return <div style={{color: 'white', marginTop: '100px', fontSize: 'large'}}>No album data available in AlbumPage</div>;
  }

  return <SongsHeroSection item={albumData} />;
}

export default AlbumPage;




// import React from 'react'
// import SongsHeroSection from '../songsPage/hero'



// export default function AlbumPage(){
    
    
//     return (
//         <div className='albumPageHome'>
//           <SongsHeroSection />  
//         </div>
//     )
// }
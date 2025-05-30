import React from 'react';
// import { Grid } from '@mui/material';
// import SongCard from './SongCard'; // Assume you have a SongCard component
import SwiperCards from './swiper'
export default function SongSection({ songs, category }) {
  return (
    
    <div className="outerContainer">
      {songs && (
      <SwiperCards cardDetails={songs} category={category} uniqueId={category} />
      )}
      </div>
   
    )
}




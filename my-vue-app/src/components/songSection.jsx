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


// import React, { useEffect, useState } from "react";
// import Chips from "./chip";
// import { Cards } from "./card";
// import "./section1.css";
// import axios from "axios";
// import { SnackbarProvider, useSnackbar } from "notistack";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import SongCards from './songCards'
// import SwiperCards from './swiper'
// import './songSection.css';

// export default function SongSection({url, category}) {
//   let { enqueueSnackbar } = useSnackbar();
//   let [cardDetails, setCardDetails] = useState(null);

//   let fetchCard = async (url) => {
//     try {
//       let res = await axios.get(url);
//       console.log(res.data);
//       setCardDetails(res.data);
//       return res.data;
//     } catch (error) {
//       if (error.response && error.response.status != 200) {
//         enqueueSnackbar(error.response.message, { variant: "error" });
//       } else {
//         enqueueSnackbar("Something went wrong", { variant: "error" });
//       }
//     }
//   };

//   useEffect(() => {
//     fetchCard(url);
//   }, []);

//   return (
//     <div className="outerContainer">
//       {cardDetails && (
//       <SwiperCards cardDetails={cardDetails} category={category} uniqueId={category} />
//       )}
     
      
//     </div>
//   );
// }


// SongSection.js


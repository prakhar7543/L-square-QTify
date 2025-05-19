import React, { useEffect, useState } from "react";
import Chips from "./chip";
import { Cards } from "./card";
import "./section1.css";
import axios from "axios";
import { SnackbarProvider, useSnackbar } from "notistack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SwiperCards from "./swiper";
import SongCards from './songCards';

export default function Section({ url, category, buttonName }) {
  let { enqueueSnackbar } = useSnackbar();
  let [cardDetails, setCardDetails] = useState(null);
  // let [showSwiper, setShowSwiper] = useState(false);
  let [currentButtonName, setCurrentButtonName] = useState(buttonName);
  let [showCards, setShowCards] = useState(false);

  let fetchCard = async (url) => {
    try {
      let res = await axios.get(url);
      console.log(`cardDetails ${res.data}`);
      setCardDetails(res.data);
      return res.data;
    } catch (error) {
      if (error.response && error.response.status != 200) {
        enqueueSnackbar(error.response.message, { variant: "error" });
      } else {
        enqueueSnackbar("Something went wrong", { variant: "error" });
      }
    }
  };

  let handleClick = () => {
    setCurrentButtonName((prevName) =>
      prevName === "Collapse" ? "Show All" : "Collapse"
    );
    setShowCards(!showCards);
  };

  useEffect(() => {
    fetchCard(url);
  }, []);

  return (
    <div className="outerContainer">
      <div className="container">
        <Box
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
          className="menuBar"
        >
          <h4>{category}</h4>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              color: "#34C94B",
              paddingTop: "15px",
              paddingRight: "15px",
            }}
          >
            {currentButtonName}
          </Typography>
        </Box>
        
       
          {showCards ? (
             <Box>
            <Grid container spacing={1} direction="row" gap={0}>
              {cardDetails.map((item) => (
                <Grid item key={item.id} lg={2} md={3} sm={6}>
                  {category !== 'songs' ? (
          <Cards item={item} />
        ) : (
          <SongCards item={item} />
        )}
                </Grid>
              ))}
            </Grid>
          
          </Box>
        ) : (<SwiperCards cardDetails={cardDetails} category={category} uniqueId={category} />)}

        
      </div>
    </div>
  );
}

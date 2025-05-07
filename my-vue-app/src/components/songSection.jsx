import React, { useEffect, useState } from "react";
import Chips from "./chip";
import { Cards } from "./card";
import "./section1.css";
import axios from "axios";
import { SnackbarProvider, useSnackbar } from "notistack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SongCards from './songCards'

export default function SongSection({url}) {
  let { enqueueSnackbar } = useSnackbar();
  let [cardDetails, setCardDetails] = useState(null);

  let fetchCard = async (url) => {
    try {
      let res = await axios.get(url);
      console.log(res.data);
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

  useEffect(() => {
    fetchCard(url);
  }, []);

  return (
    <div className="outerContainer">
      {/* <div className="container">
        <div className="menuBar">
          <h4>{category}</h4>
         
        </div> */}

        <Box>
          {cardDetails && (
            <Grid container spacing={1} direction="row" gap={0}>
              {cardDetails.map((item) => (
                <Grid item key={item.id} lg={2} md={3} sm={6}>
                  <SongCards item={item} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      
    </div>
  );
}

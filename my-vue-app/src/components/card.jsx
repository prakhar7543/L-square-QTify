import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Chips from "./chip";
import "./card.css";

// export let dummyData = {
//   id: "ed62ef5d-89e0-45bd-9b83-792f1ba4430a",
//   title: "Light My Fire",
//   followers: 100,
//   artists: ["Denise Osinski"],
//   genre: {
//     key: "jazz",
//     label: "Jazz",
//   },
//   likes: 47221,
//   image:
//     "https://images.pexels.com/photos/3264736/pexels-photo-3264736.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//   durationInMs: 35149,
// };

export function Cards({item}) {
  return (
    <Card
      sx={{
        width: 159,
        height: 232,
        gap: 6,
        margin: 2,
        backgroundColor: "black",
        // borderTopRightRadius: 10,
        // borderTopLeftRadius: 10,
      }}
    >
      <CardActionArea
        sx={{
          width: 159,
          height: 205,
          // borderBottomLeftRadius: 10,
          // borderBottomRightRadius: 10,
          borderRadius: "10px",
          // border: "1px solid black",
          padding: "5px",
        }}
      >
        <CardMedia
          component="img"
          className="cardComponent"
          height="170"
          sx={{
            margin: 0,
            objectFit: "cover",
            objectPosition: "center",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          image={item.image}
          alt="green iguana"
        />
        <div className="follow">
          <Chips followers={item.follows} />
        </div>

        <CardContent sx={{ margin: 0, padding: 0 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              margin: 0,
              height: 21,
              color: "white",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "lighter",
              fontSize: "small",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
            }}
          >
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

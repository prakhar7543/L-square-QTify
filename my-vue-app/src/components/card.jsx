import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Chips from "./chip";
import "./card.css";

export function Cards({ item, onClick }) {
  return (
    <Card
      onClick={() => onClick(item)}
      sx={{
        width: 159,
        height: 232,
        gap: 6,
        margin: 2,
        backgroundColor: "black",
      }}
    >
      <CardActionArea
        sx={{
          width: 159,
          height: 205,
          borderRadius: "10px",
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
          <Chips followers={`${item.follows} Follows`} />
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

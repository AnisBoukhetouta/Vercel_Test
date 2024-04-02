import React, { useRef } from "react";
import classes from "./lobbyHeaderGame.module.css";
import AppConstants from "../../AppConstants";
import GameCard from "../gameCards/gameCard";
import ScrollCarousel from "scroll-carousel-react";
import { Carousel, ScrollingCarousel } from "@trendyol-js/react-carousel";
import GameCard1 from "../gameCards/gameCard1";
import { Typography } from "@mui/material";

export default function LobbyHeaderGame() {
  return (
    <div className={classes.lobodyGame}>
      <Typography variant="h4" gutterBottom sx={{color:"white",ml:2}}>
        BY EPIO
      </Typography>
      <div className={classes.topGames}>
        <ScrollingCarousel
          children={AppConstants.cardData.map((item) => (
            <GameCard1 key={item.id} item={item} />
          ))}
        />
        {/* {AppConstants.cardData.map((item) => (
          <GameCard key={item.id} item={item} />
        ))} */}
      </div>
    </div>
  );
}

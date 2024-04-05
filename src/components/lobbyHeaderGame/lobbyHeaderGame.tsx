import React from "react";
import classes from "./lobbyHeaderGame.module.css";
import AppConstants from "../../AppConstants";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import GameLobbyCard from "../gameCards/gameLobbyCard";
import { Typography } from "@mui/material";

export default function LobbyHeaderGame() {
  return (
    <div className={classes.lobodyGame}>
      <Typography variant="h4" gutterBottom sx={{ color: "white", ml: 2 }}>
        BY EPIO
      </Typography>
      <div className={classes.topGames}>
        <ScrollingCarousel
          children={AppConstants.cardData.map((item) => (
            <GameLobbyCard key={item._id} item={item} />
          ))}
        />
      </div>
    </div>
  );
}

import React from "react";
import { Game } from "../../@types/dataTypes";
import { Grid } from "@mui/material";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { NavLink } from "react-router-dom";
import AloneCard from "../fortGameCard/aloneCard";
import DoubleCard from "../fortGameCard/doubleCard";

interface Props {
  gameDatas: Game[];
  onSet?: (e: Game) => void;
}

export default function FortGameCards({ gameDatas, onSet }: Props) {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <ScrollingCarousel
        children={gameDatas.map((gameData, index) => (
          <NavLink
            key={gameData._id}
            to="/play"
            style={{ textDecoration: "none" }}
            state={gameData._id}
            onClick={() => onSet && onSet(gameData)}
          >
            {gameData.cardType === "one" ? (
              <AloneCard cardData={gameData} />
            ) : (
              <DoubleCard cardData={gameData} />
            )}
          </NavLink>
        ))}
      />
    </Grid>
  );
}

import React from "react";
import classes from "./fortGameCard.module.css";
import FortniteButton from "../forniteButton/FortniteButton";
import FortniteButtonImage from "../forniteButton/FortniteButtonImage";
import { Game } from "../../@types/dataTypes";

interface Props {
  cardData: Game;
}

export default function DoubleCard({ cardData }: Props) {
  return (
    <div className={classes.card}>
      <FortniteButton
        color="yellow"
        type="secondary"
        text={cardData.gameTitle ?? "New"}
        subtext={cardData.gameSubTitle ?? "New"}
      >
        <FortniteButtonImage
          src="assets/images/evie.webp"
          width="120%"
          height="95%"
          right="5%"
          top="auto"
          bottom="-40px"
        />
        <FortniteButtonImage
          src="assets/images/character.webp"
          width="130%"
          height="90%"
          left="7%"
          top="auto"
          bottom="0"
        />
      </FortniteButton>
    </div>
  );
}

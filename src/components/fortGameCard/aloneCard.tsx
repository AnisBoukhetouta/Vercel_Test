import React from "react";
import classes from "./fortGameCard.module.css";
import FortniteButton from "../forniteButton/FortniteButton";
import FortniteButtonImage from "../forniteButton/FortniteButtonImage";
import { Game } from "../../@types/dataTypes";

interface Props {
  cardData: Game;
}

export default function AloneCard({ cardData }: Props) {
  return (
    <div className={classes.card}>
      <FortniteButton
        color="blue"
        type="secondary"
        text={cardData.gameTitle ?? "New"}
        subtext={cardData.gameSubTitle ?? "New"}
      >
        <FortniteButtonImage
          top="auto"
          bottom="0"
          src="assets/images/character.webp"
        />
      </FortniteButton>
    </div>
  );
}

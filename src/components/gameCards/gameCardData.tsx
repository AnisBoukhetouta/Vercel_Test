import React from "react";
import classes from "./card.module.css";
import CardValue from "./gameCardValue";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  item: any;
  link?: boolean;
  setView?: (e: any) => void;
}
export default function CardData({ item, link, setView }: Props) {
  return (
    <div className={!link ? classes.cardData : classes.link}>
      {!link ? (
        <>
          <div className={classes.title}>Title</div>
          <CardValue item={item} />
        </>
      ) : (
        <button
          onClick={() => setView}
          className={classes.lobbyHeaderButton}
          type="button"
        >
          PLAY NOW
        </button>
      )}
    </div>
  );
}

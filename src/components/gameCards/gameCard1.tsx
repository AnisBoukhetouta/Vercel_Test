import * as React from "react";
import Card from "@mui/material/Card";
import styles from "./card.module.css";

export default function GameCard1({ item }) {
  const [mouseOver, setMouseOver] = React.useState("");

  const handlePlay = (key) => {
    console.log("play clicked", key);
  };

  return (
    <Card
      key={item.id}
      sx={{
        width: "180px",
        height: 130,
        cursor: "pointer",
        borderRadius: 5,
        boxShadow: 10,
        m: 2,
      }}
      className={mouseOver && styles.card}
      onClick={() => handlePlay(item.id)}
      onMouseOver={() => setMouseOver(item.id)}
      onMouseOut={() => setMouseOver("")}
    >
      <img
        src={item.imageOver}
        alt="game"
        className={mouseOver ? styles.hover : styles.image}
      />
    </Card>
  );
}

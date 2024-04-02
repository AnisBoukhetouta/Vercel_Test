import React from "react";
import classes from "./lobbyHeader.module.css";
import { Button } from "@mui/material";

export default function LobbyHeader() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className={classes.container}>
      <div className={classes.lobbyHearder}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "200px",
            height: "70px",
            borderRadius: "10px",
            fontSize: "20px",
            color: "black",
            background: "rgb(232, 174, 15)",
            // "&:hover": {
          }}
          onClick={handleClick}
        >
          <b> PLAY NOW</b>
        </Button>
      </div>
      <img
        className={classes.image}
        src="images/home/10308.jpg"
        alt="lexschool"
      />
    </div>
  );
}

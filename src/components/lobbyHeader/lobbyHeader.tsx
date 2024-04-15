import React from "react";
import classes from "./lobbyHeader.module.css";

export default function LobbyHeader() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className={classes.container}>
      <div>
        <img
          className={classes.image}
          src="images/gamelobby/gameLobby.jpg"
          alt="lexschool"
        />
        <div className={classes.gradientOverlay}></div>
      </div>
      <div className={classes.lobbyHearder}>
        <center>
          <div className={classes.title}>LexSCHOOL</div>
          <div className={classes.titleBody}>The future of Game is here.</div>
          <div className={classes.buttonline}>
            <button
              className={classes.lobbyHeaderButton}
              type="button"
              onClick={handleClick}
            >
              PLAY NOW
            </button>
          </div>
        </center>
      </div>
    </div>
  );
}

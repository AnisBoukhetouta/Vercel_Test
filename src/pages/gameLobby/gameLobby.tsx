import React, { useEffect, useState } from "react";
import classes from "./gameLobby.module.css";
import LobbyHeader from "../../components/lobbyHeader/lobbyHeader";
import LobbyHeaderGame from "../../components/lobbyHeaderGame/lobbyHeaderGame";

export default function GameLobby() {
  const [item, setItem] = useState<any>();

  return (
    <div className={classes.gameLobbyContainer}>
      <LobbyHeader />
      <LobbyHeaderGame setItem={setItem} />
    </div>
  );
}

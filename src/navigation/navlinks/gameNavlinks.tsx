import * as React from "react";
import classes from "./gameNavlinks.module.css";
import GameNavlink from "../navlink/gameNavlink";

const gameNavlinks = () => {
  return (
    <div>
      <ul className={classes.navlinks}>
        <GameNavlink link="/play">PLAY</GameNavlink>
        <GameNavlink link="/inventory">LOCKER</GameNavlink>
        <GameNavlink link="/1">ITEM SHOP</GameNavlink>
        <GameNavlink link="/2">BATTLE PASS</GameNavlink>
        <GameNavlink link="/3">QUESTS</GameNavlink>
        <GameNavlink link="/4">COMPLETE</GameNavlink>
        <GameNavlink link="/5">CAREER</GameNavlink>
      </ul>
    </div>
  );
};

export default gameNavlinks;

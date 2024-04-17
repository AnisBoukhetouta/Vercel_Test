import * as React from "react";
import classes from "./gameNavlinks.module.css";
import GameNavlink from "../navlink/gameNavlink";

const gameNavlinks = () => {
  return (
    <div>
      <ul className={classes.navlinks}>
        <GameNavlink link="/play">PLAY</GameNavlink>
        <GameNavlink link="/inventory">LOCKER</GameNavlink>
        <GameNavlink link="/#">ITEM SHOP</GameNavlink>
        <GameNavlink link="/#">BATTLE PASS</GameNavlink>
        <GameNavlink link="/#">QUESTS</GameNavlink>
        <GameNavlink link="/#">COMPLETE</GameNavlink>
        <GameNavlink link="/#">CAREER</GameNavlink>
      </ul>
    </div>
  );
};

export default gameNavlinks;

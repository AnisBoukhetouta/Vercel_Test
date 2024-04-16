import * as React from "react";
import classes from "./navlinks.module.css";
import Navlink from "../navlink/navlink";

const gameNavlinks = () => {
  return (
    <div>
      <ul className={classes.navlinks}>
        <Navlink link="/play">PLAY</Navlink>
        <Navlink link="/inventory">LOCKER</Navlink>
        <Navlink link="/inventory">ITEM SHOP</Navlink>
        <Navlink link="/inventory">BATTLE PASS</Navlink>
        <Navlink link="/inventory">QUESTS</Navlink>
        <Navlink link="/inventory">COMPLETE</Navlink>
        <Navlink link="/inventory">CAREER</Navlink>
      </ul>
    </div>
  );
};

export default gameNavlinks;

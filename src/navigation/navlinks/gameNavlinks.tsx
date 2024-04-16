import * as React from "react";
import classes from "./navlinks.module.css";
import Navlink from "../navlink/navlink";

const gameNavlinks = () => {
  return (
    <div>
      <ul className={classes.navlinks}>
        <Navlink link="/play">Play</Navlink>
        <Navlink link="/upload">Upload</Navlink>
        <Navlink link="/inventory">Inventory</Navlink>
      </ul>
    </div>
  );
};

export default gameNavlinks;

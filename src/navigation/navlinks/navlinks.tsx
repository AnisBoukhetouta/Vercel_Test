import * as React from "react";
import classes from "./navlinks.module.css";
import Navlink from "../navlink/navlink";
import { NavLink } from "react-router-dom";

const navlinks = () => {
  return (
    <div>
      <ul className={classes.navlinks}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h1 className={classes.title}>LexSCHOOL</h1>
        </NavLink>
        <Navlink link="/">Home</Navlink>
        <Navlink link="/gamelobby">GameLobby</Navlink>
        <Navlink link="/upload">Upload</Navlink>
        <Navlink link="/inventory">Inventory</Navlink>
      </ul>
    </div>
  );
};

export default navlinks;

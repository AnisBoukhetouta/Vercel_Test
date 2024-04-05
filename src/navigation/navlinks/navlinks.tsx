import React from "react";
import classes from "./navlinks.module.css";

import Navlink from "../navlink/navlink";

const navlinks = () => {
  return (
    <div>
      <ul className={classes.navlinks}>
        <Navlink link="/">
          <h1 style={{color: "var(--accent)"}}>LexSCHOOL</h1>
        </Navlink>
        <Navlink link="/">Home</Navlink>
        {/* <Navlink link="/test">Test</Navlink> */}
        <Navlink link="/gamelobby">GameLobby</Navlink>
        <Navlink link="/upload">Upload</Navlink>
        <Navlink link="/playground">Playground</Navlink>
      </ul>
    </div>
  );
};

export default navlinks;

import React from "react";
import classes from "./navlinks.module.css";

import Navlink from "../navlink/navlink";

const navlinks = () => {
  return (
    <div>
      <ul className={classes.navlinks}>
        <li>
          <Navlink link="/">
            <h1 style={{ color: "var(--accent)" }}>LexSCHOOL</h1>
          </Navlink>
        </li>
        <li>
          <Navlink link="/">Home</Navlink>
        </li>
        {/* <Navlink link="/test">Test</Navlink> */}
        <li>
          <Navlink link="/gamelobby">GameLobby</Navlink>
        </li>
        <li>
          <Navlink link="/upload">Upload</Navlink>
        </li>
        {/* <Navlink link="/playground">Playground</Navlink> */}
      </ul>
    </div>
  );
};

export default navlinks;

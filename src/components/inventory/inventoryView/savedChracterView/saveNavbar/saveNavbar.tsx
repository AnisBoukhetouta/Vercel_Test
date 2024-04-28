import React from "react";
import classes from "./saveNavBar.module.css";
import { charactor } from "../savedCharacterView";
import Prev from "./prev";

interface props {
  handlePrev: () => void;
}
const SaveNaveBar = ({handlePrev} : props) => {
  return (
    <ul className={classes.navlinks}>
      <Prev handlePrev={handlePrev}/>
      {charactor.map((item) => (
        <button className={classes.navButton}>
          {item.title.toLocaleUpperCase()}
          <span className={classes.dot}></span>
        </button>
      ))}
    </ul>
  );
};

export default SaveNaveBar;

import React from "react";
import classes from "./index.module.css";

const Button = () => {
  return (
    <div className={classes.buttons}>
      <div className={classes.bigButton}></div>
      <button className={classes.smallButton}>
        <span className={`${classes.cardText} ${classes.buttonColor}`}>
          Play Now
        </span>
      </button>
    </div>
  );
};

export default Button;

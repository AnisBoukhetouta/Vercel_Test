import React from "react";
import classes from "./index.module.css";
import CardButton1 from "./cardButton1";

const CustomizButton = () => {
  return (
    <div className={classes.customizButton}>
      <div className={`${classes.bigButton} ${classes.buttonSize}`}>
        <div className={classes.cardRow}>
          <div className={classes.name}>Your Nickname</div>
          <div></div>
        </div>
        <div className={classes.cardRows}>
          <div className={classes.name}>Speed: 10</div>
          <div className={classes.sliderBar}></div>
        </div>
        <div className={classes.cardRows}>
          <div className={classes.name}>Speed: 5</div>
          <div className={`${classes.sliderBar} ${classes.barWidth}`}></div>
        </div>
        <div className={classes.cardRow}>
          <CardButton1 />
        </div>
      </div>
    </div>
  );
};

export default CustomizButton;

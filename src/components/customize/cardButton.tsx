import React from "react";
import classes from "./index.module.css";

const CardButton = () => {
  return (
    <button className={classes.buttonCSS}>
      <div className={classes.wrapper}>
        <div className={classes.vignetteBg}></div>
        <div className={classes.scrollingBg}></div>
        <div className={classes.radialGradient}></div>
        <div className={classes.flash}></div>
        <div className={classes.bottom}></div>
        <slot></slot>
        <div className={classes.bottom}></div>
        <div
          className={`${classes.textWrapper} ${classes["textWrapper--secondary"]}`}
        >
          <p className={`${classes["subtext--secondary"]} ${classes.subtext}`}>
            Assemble
          </p>
          <h2 className={`${classes.text} ${classes["text--secondary"]}`}>
            Snap
          </h2>
        </div>
        <img
          src="https://arcarr.com/assets/images/post4/mecha_strike_commander.webp"
          className={classes.image}
        />
        <div className={`${classes.bar} ${classes["bar--secondary"]}`}></div>
      </div>
    </button>
  );
};

export default CardButton;
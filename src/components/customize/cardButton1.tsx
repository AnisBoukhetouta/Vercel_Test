import React from "react";
import classes from "./index.module.css";

const CardButton1 = () => {
  return (
    <button className={classes.buttonCSS1}>
      <div className={classes.wrapper}>
        <div className={classes.vignetteYellow}></div>
        <div className={classes.scrollingBg}></div>
        <div className={classes.radialGradientYellow}></div>
        <div className={classes.flash}></div>
        <div className={classes.bottomYellow}></div>
        <slot></slot>
        <div className={classes.bottomYellow}></div>
        {/* <div
          className={`${classes.textWrapper} ${classes["textWrapper--secondary"]}`}
        >
          <p className={`${classes["subtext--secondary"]} ${classes.subtext}`}>
            Assemble
          </p>
          <h2 className={`${classes.text} ${classes["text--secondary"]}`}>
            Snap
          </h2>
        </div> */}
        <div className={`${classes.bar} ${classes["bar--secondary"]}`}></div>
      </div>
    </button>
  );
};

export default CardButton1;
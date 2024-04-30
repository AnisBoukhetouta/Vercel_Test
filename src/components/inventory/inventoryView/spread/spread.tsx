import React from "react";
import classes from "./spread.module.css";

interface props {
  handleAdd?: () => void;
}

const dots = () => {
  const array = [1, 2, 3];
  return (
    <>
      {array.map((i) => (
        <div className={classes.dot} key={i}></div>
      ))}
    </>
  );
};

const Spread = ({ handleAdd }: props) => {
  return (
    <>
      <div className={classes.spread} onClick={handleAdd}>
        {dots()}
      </div>
    </>
  );
};

export default Spread;

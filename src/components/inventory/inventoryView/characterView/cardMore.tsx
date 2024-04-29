import React from "react";
import classes from "./characterView.module.css";

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

const CardMore = ({handleAdd} : props) => {
  return (
    <>
      <div className={classes.cardMore} onClick={handleAdd}>{dots()}</div>
      
    </>
  );
};

export default CardMore;

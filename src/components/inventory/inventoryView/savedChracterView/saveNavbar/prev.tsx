import React from "react";
import classes from "./saveNavBar.module.css";
interface props {
  handlePrev: () => void;
}
const Prev = ({handlePrev} : props) => {
  return (
    <div className={classes.prev} onClick={handlePrev}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="30px"
        fill="white"
      >
        <path d="M416-64 0-480l416-416 100 100-316 316 316 316L416-64Z" />
      </svg>
    </div>
  );
};

export default Prev;

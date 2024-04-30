import React from "react";
import classes from "./index.module.css";
import CardButton from "./cardButton";
import Button from "./Button";
import CustomizButton from "./CustomizButton";
import FortniteButton from "../forniteButton/FortniteButton";
import FortniteButtonImage from "../forniteButton/FortniteButtonImage";

const CustomizeForm = () => {
  return (
    <div className={classes.customize}>
      <Button />
      <CustomizButton />
      <div className={classes.customizeBody}>
        <div className={classes.newCourses}>
          <span className={classes.cardText}>New Courses</span>
          <div className={classes.cardRow}>
            {(newcourses || []).map((item) => (
              <div key={item.id} className={classes.card}>
                {/* <CardButton /> */}
                <FortniteButton
                  color="blue"
                  type="secondary"
                  text="New"
                  subtext="New"
                >
                  <FortniteButtonImage top="auto" bottom="0" src="assets/images/character.webp" />
                </FortniteButton>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.newCourses}>
          <span className={classes.cardText}>Popular Courses</span>
          <div className={classes.cardRow}>
            {(newcourses || []).map((item) => (
              <div key={item.id} className={classes.card}>
                {/* <CardButton /> */}
                <FortniteButton
                  color="yellow"
                  type="secondary"
                  text="New"
                  subtext="New"
                >
                  <FortniteButtonImage top="auto" bottom="0" src="assets/images/character.webp" />
                </FortniteButton>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.newCourses}>
          <span className={classes.cardText}>Trending Courses</span>
          <div className={classes.cardRow}>
            {(newcourses || []).map((item) => (
              <div key={item.id} className={classes.card}>
                {/* <CardButton /> */}
                <FortniteButton
                  color="blue"
                  type="secondary"
                  text="New"
                  subtext="New"
                >
                  <FortniteButtonImage top="auto" bottom="0" src="assets/images/character.webp" />
                </FortniteButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const blueColor = {
  color: "vignetteBgBlue",
};
const yellowColor = {
  color: "yellow",
};

const newcourses = [
  { id: 1, color: "red" },
  { id: 2, color: "red" },
  { id: 3, color: "red" },
  { id: 4, color: "red" },
  { id: 5, color: "red" },
  { id: 6, color: "red" },
];
export default CustomizeForm;

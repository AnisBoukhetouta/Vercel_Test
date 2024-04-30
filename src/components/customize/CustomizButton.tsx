import React from "react";
import classes from "./index.module.css";
import CardButton1 from "./cardButton1";
import FortniteButton from "../forniteButton/FortniteButton";
import FortniteButtonImage from "../forniteButton/FortniteButtonImage";

const CustomizButton = () => {
  return (
    <div className={classes.customizButton}>
      <div className={classes.bigCard}>
        <FortniteButton color="yellow" type="secondary" text="New" subtext="New">
          <FortniteButtonImage
            src="assets/images/evie.webp"
            width="120%"
            height="95%"
            right="5%"
            top="auto"
            bottom="-40px"
          />
          <FortniteButtonImage
            src="assets/images/character.webp"
            width="130%"
            height="90%"
            left="7%"
            top="auto"
            bottom="0"
          />
        </FortniteButton>
      </div>
      <div className={classes.smallCards}>
        <div className={classes.smallCard}>
          <FortniteButton
            color="blue"
            type="secondary"
            text="New"
            subtext="New"
          >
            <FortniteButtonImage src="assets/images/character.webp" />
          </FortniteButton>
        </div>
        <div className={classes.smallCard}>
          <FortniteButton
            color="blue"
            type="secondary"
            text="New"
            subtext="New"
          >
            <FortniteButtonImage src="assets/images/character.webp" />
          </FortniteButton>
        </div>
      </div>
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

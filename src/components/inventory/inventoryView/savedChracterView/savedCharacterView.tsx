import React from "react";
import classes from "./savedCharacterView.module.css";
import SaveNaveBar from "./saveNavbar/saveNavbar";
import CardMore from "../characterView/cardMore";

interface props {
  handlePrev: () => void;
}

export default function SavedCharacterView({ handlePrev }: props) {
  return (
    <div className={classes.character}>
      <div className={classes.characterElement}></div>
      <div className={classes.characterBody}>
        <div className={classes.characterBodyTitle}>CHARACTER SAVED</div>
        <SaveNaveBar handlePrev={handlePrev} />
        <input
          type="text"
          placeholder="Search"
          className={classes.search}
        ></input>
        <div className={classes.characterCards}>
          <div className={classes.cardBody}>
            {charactorSave.map((item, index) => (
              <div
                key={index}
                className={`${classes.card} ${classes.characterCard} `}
              >
                <img
                  src={item.image}
                  alt="character"
                  className={classes.cardImg}
                />
                <div className={classes.cardAdd}>
                  <CardMore />
                </div>
                <div className={classes.colorFlow} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export const charactor = [
  { id: 0, title: "Outfit", image: "./images/inventory/glider.png" },
  { id: 1, title: "Back bling", image: "./images/inventory/contrail.png" },
  { id: 2, title: "Pickaxe", image: "./images/inventory/back.png" },
  { id: 3, title: "Glider", image: "./images/inventory/plan.png" },
  // { id: 4, title: "Contrail", image: "./images/inventory/charactor.png" },
  // { id: 5, title: "Aura", image: "./images/inventory/empty.png" },
];

const charactorSave = [
  { id: 0, image: "./images/inventory/plan.png" },
  { id: 1, image: "./images/inventory/plan.png" },
  { id: 2, image: "./images/inventory/plan.png" },
  { id: 3, image: "./images/inventory/plan.png" },
  { id: 4, image: "./images/inventory/plan.png" },
  { id: 5, image: "./images/inventory/plan.png" },
  { id: 6, image: "./images/inventory/plan.png" },
  { id: 7, image: "./images/inventory/plan.png" },
  { id: 8, image: "./images/inventory/plan.png" },
  { id: 9, image: "./images/inventory/plan.png" },
  { id: 10, image: "./images/inventory/plan.png" },
  { id: 11, image: "./images/inventory/plan.png" },
  { id: 12, image: "./images/inventory/plan.png" },
  { id: 13, image: "./images/inventory/plan.png" },
  { id: 14, image: "./images/inventory/plan.png" },
  { id: 15, image: "./images/inventory/plan.png" },
  { id: 16, image: "./images/inventory/plan.png" },
  { id: 17, image: "./images/inventory/plan.png" },
];

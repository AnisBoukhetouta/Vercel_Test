import React from "react";
import classes from "./characterView.module.css";
import ModelViewer from "../../../modelViewer/modelViewer";

interface Props {
  setOptions: (e: boolean) => void;
}

export default function CharacterView({ setOptions }: Props) {
  const [characterName, setCharacterName] = React.useState("Outfit");
  return (
    <div className={classes.Cotainer}>
      <div className={classes.optionsContainer}>
        <div className={classes.navTitle}>{menu[0].title}</div>
        <div className={classes.optionTitle}>{characterName.toUpperCase()}</div>
        <div className={classes.characterBodyCards}>
          {charactor.map((item, key) => (
            <div
              className={`${classes.card} ${classes.cardWidth}`}
              key={key}
              onClick={() => setCharacterName(item.title)}
            >
              <img
                src={"./images/inventory/glider.png"}
                alt="character"
                className={classes.cardImg}
              />
              <div className={classes.colorFlow} />
            </div>
          ))}
        </div>

        <button className={`${classes.buttons} ${classes.saveButton}`}>
          SAVE CHARACTOR
        </button>
        <button
          className={`${classes.buttons} ${classes.optionButton}`}
          onClick={() => setOptions(true)}
        >
          OPTIONS
        </button>
      </div>
      <div className={classes.modelViewerContainer}>
        <ModelViewer src={"./models/character0.glb"} />
      </div>
    </div>
  );
}

const charactor = [
  { id: 0, title: "Outfit", image: "./images/inventory/glider.png" },
  { id: 1, title: "Backbling", image: "./images/inventory/contrail.png" },
  { id: 2, title: "Pickaxe", image: "./images/inventory/back.png" },
  { id: 3, title: "Glider", image: "./images/inventory/plan.png" },
  { id: 4, title: "Contrail", image: "./images/inventory/charactor.png" },
  { id: 5, title: "Aura", image: "./images/inventory/empty.png" },
];

const menu = [
  { id: 0, title: "CHARACTER" },
  { id: 1, title: "EMOTES" },
  { id: 2, title: "WRAPS" },
  { id: 3, title: "LOBBY" },
  { id: 4, title: "INSTRUMENTS" },
  { id: 5, title: "CARS" },
  { id: 6, title: "JAM TRACKS" },
];

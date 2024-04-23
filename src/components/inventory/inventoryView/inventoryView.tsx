import React, { useState } from "react";
import classes from "./inventoryView.module.css";
import { useNavigate } from "react-router-dom";
import CharacterView from "./characterView/characterView";
import SavedCharacterView from "./savedChracterView/savedCharacterView";

export default function InventoryView() {
  const navigate = useNavigate();
  const [characterOptions, setCharacterOptions] = useState(false);


  return (
    <div className={classes.inventoryView}>
      {!characterOptions && (
        <CharacterView setOptions={(e: boolean) => setCharacterOptions(e)} />
      )}
      <div
        className={
          characterOptions ? `${classes.optionsView}` : `${classes.optionsShow}`
        }
      >
        <SavedCharacterView />
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

const charactorSave = [
  { id: 0, image: "./images/inventory/charactor.png" },
  { id: 1, image: "./images/inventory/charactor.png" },
  { id: 2, image: "./images/inventory/charactor.png" },
  { id: 3, image: "./images/inventory/charactor.png" },
  { id: 4, image: "./images/inventory/charactor.png" },
  { id: 5, image: "./images/inventory/charactor.png" },
  { id: 6, image: "./images/inventory/charactor.png" },
  { id: 7, image: "./images/inventory/charactor.png" },
  { id: 8, image: "./images/inventory/charactor.png" },
  { id: 9, image: "./images/inventory/charactor.png" },
  { id: 10, image: "./images/inventory/charactor.png" },
  { id: 11, image: "./images/inventory/charactor.png" },
];

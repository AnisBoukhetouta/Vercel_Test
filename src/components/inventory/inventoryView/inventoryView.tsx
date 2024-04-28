import React, { useState } from "react";
import classes from "./inventoryView.module.css";
import { useNavigate } from "react-router-dom";
import CharacterView from "./characterView/characterView";
import SavedCharacterView from "./savedChracterView/savedCharacterView";

interface props {
  handleAdd: () => void;
}

export default function InventoryView({ handleAdd }: props) {
  // const navigate = useNavigate();
  const [characterOptions, setCharacterOptions] = useState(false);

  return (
    <div className={classes.inventoryView}>
      {!characterOptions && (
        <CharacterView
          setOptions={(e: boolean) => setCharacterOptions(e)}
          handleAdd={handleAdd}
        />
      )}
      {/* <div
        className={
          characterOptions ? `${classes.optionsView}` : `${classes.optionsShow}`
        }
      >
        <SavedCharacterView />
      </div> */}
    </div>
  );
}

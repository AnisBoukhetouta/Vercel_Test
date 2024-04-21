import React, { useEffect, useState } from "react";
import classes from "./inventoryView.module.css";
import ModelViewer from "../../modelViewer/modelViewer";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppConstants from "../../../AppConstants";
import CharacterView from "./characterView/characterView";
import SavedCharacterView from "./savedChracterView/savedCharacterView";

interface Props {
  characterOptions: boolean;
  menu: any[];
  title: number;
  setCharacterOptions: (value: boolean) => void;
}

export default function InventoryView({
  characterOptions,
  setCharacterOptions,
}: Props) {
  const navigate = useNavigate();
  const [characterName, setCharacterName] = useState("Outfit");

  const [uid, setUid] = useState("");
  const [fetchedData, setFetchedData] = useState<any>([]);
  const [image, setImage] = useState("");
  const [glbFile, setGlbFile] = useState("");

  useEffect(() => {
    const getModel = async () => {
      auth.onAuthStateChanged(function (user) {
        if (user) {
          setUid(user.uid);
        } else {
          navigate("/regist/login");
        }
      });
      try {
        if (uid) {
          const response = await axios.get(
            `${AppConstants.getCharacterUrl}?uid=${uid}`
          );
          console.log("FetchedModel~~~~~~", response.data);
          setFetchedData(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getModel();
  }, [uid, navigate]);

  useEffect(() => {
    if (fetchedData.length > 0) {
      const characterFiles = fetchedData.find(
        (item: any) => item._id === characterName
      )?.files;
      const backblingFileNames = characterFiles?.map((item: any) =>
        item.fileName.split(".").slice(0, -1).join(".")
      );
      const uniqueFileNames = [...new Set(backblingFileNames)];
      let img = characterFiles?.find(
        (item: any) =>
          item.fileName.includes(uniqueFileNames[0]) &&
          item.fieldName === "coverImage" &&
          item
      );
      let glb = characterFiles?.find(
        (item: any) =>
          item.fileName.includes(uniqueFileNames[0]) &&
          item.fieldName === "characterFileUpload" &&
          item
      );
      setImage(
        AppConstants.baseUrl + "/" + img.destination + "/" + img.fileName
      );
      setGlbFile(
        AppConstants.baseUrl + "/" + glb.destination + "/" + glb.fileName
      );
    }
  }, [fetchedData, characterName]);

  useEffect(() => {
    console.log("@@@@@@@@@@@@@@", image);
    console.log("!!!!!!!!!!!!!!", glbFile);
    console.log("ZZZZZZZZZZZZZZ", charactor);
  }, [image, glbFile, characterName]);

  return (
    <div className={classes.inventoryView}>
      <div className={characterOptions ? classes.hide : classes.character}>
        <CharacterView setOptions={() => setCharacterOptions} />
      </div>
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

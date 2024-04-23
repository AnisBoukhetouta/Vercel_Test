import React from "react";
import classes from "./characterView.module.css";
import ModelViewer from "../../../modelViewer/modelViewer";
import AppConstants from "../../../../AppConstants";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase";
import axios from "axios";

interface Props {
  setOptions: (e: boolean) => void;
}

export default function CharacterView({ setOptions }: Props) {
  const navigate = useNavigate();
  const [characterName, setCharacterName] = React.useState("Outfit");

  const [uid, setUid] = React.useState("");
  const [fetchedData, setFetchedData] = React.useState<any>([]);
  const [image, setImage] = React.useState("");
  const [glbFile, setGlbFile] = React.useState("");

  React.useEffect(() => {
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

  React.useEffect(() => {
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

  // React.useEffect(() => {
  //   console.log("@@@@@@@@@@@@@@", image);
  //   console.log("!!!!!!!!!!!!!!", glbFile);
  //   console.log("ZZZZZZZZZZZZZZ", charactor);
  // }, [image, glbFile, characterName]);

  return (
    <div className={classes.Cotainer}>
      <div className={classes.optionsContainer}>
        <div className={classes.navTitle}>CHARACTER</div>
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
      {/* <div className={classes.modelViewerContainer}>
        <ModelViewer src={"./models/character0.glb"} />
      </div> */}
    </div>
  );
}

const charactor = [
  { title: "Outfit", image: "./images/inventory/glider.png" },
  { title: "Backbling", image: "./images/inventory/contrail.png" },
  { title: "Pickaxe", image: "./images/inventory/back.png" },
  { title: "Glider", image: "./images/inventory/plan.png" },
  { title: "Contrail", image: "./images/inventory/charactor.png" },
  { title: "Aura", image: "./images/inventory/empty.png" },
];

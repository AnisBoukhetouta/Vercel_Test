import React, { useEffect, useState } from "react";
import classes from "./charactory.module.css";
import ModelViewer from "../modelViewer/modelViewer";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Props {
  characterOptions: boolean;
  menu: any[];
  title: number;
  setCharacterOptions: (value: boolean) => void;
}

export default function InventoryBody({
  characterOptions,
  menu,
  title,
  setCharacterOptions,
}: Props) {
  const navigate = useNavigate();
  const [characterName, setCharacterName] = useState(0);

  const baseUrl = import.meta.env.VITE_APP_BASE;
  const getCharacterFile = import.meta.env.VITE_GET_CHARACTER_FILE;
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
          const response = await axios.get(`${getCharacterFile}?uid=${uid}`);
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
      const backblingFiles = fetchedData.find(
        (item: any) => item._id === "Backbling"
      )?.files;
      const backblingFileNames = backblingFiles?.map((item: any) =>
        item.fileName.split(".").slice(0, -1).join(".")
      );
      const uniqueFileNames = [...new Set(backblingFileNames)];
      const img = backblingFiles?.find(
        (item: any) =>
          item.fileName.includes(uniqueFileNames[0]) &&
          item.fieldName === "coverImage" &&
          item
      );
      const glb = backblingFiles?.find(
        (item: any) =>
          item.fileName.includes(uniqueFileNames[0]) &&
          item.fieldName === "characterFileUpload" &&
          item
      );
      setImage(baseUrl + "/" + img.destination + "/" + img.fileName);
      setGlbFile(baseUrl + "/" + glb.destination + "/" + glb.fileName);
    }
  }, [fetchedData]);

  useEffect(() => {
    console.log("@@@@@@@@@@@@@@", image);
    console.log("!!!!!!!!!!!!!!", glbFile);
  }, [image, glbFile]);

  return (
    <>
      <div className={characterOptions ? classes.hide : classes.character}>
        <div className={classes.characterBodyCotainer}>
          <div className={classes.characterOptionsContainer}>
            <div className={classes.characterBodyTitle}>
              {menu[title].title}
            </div>
            <div className={classes.characterBodysmallTitle}>
              {charactor[characterName].title}
            </div>
            <div className={classes.characterBodyCards}>
              {charactor.map((item, key) => (
                <div
                  className={`${classes.card} ${classes.cardWidth}`}
                  key={key}
                  onClick={() => setCharacterName(item.id)}
                >
                  <img
                    src={item.title !== "BACKBLING" ? item.image : image}
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
              onClick={() => setCharacterOptions(true)}
            >
              OPTIONS
            </button>
          </div>
          <div className={classes.modelViewerContainer}>
            <ModelViewer src={glbFile} />
          </div>
        </div>
        {/* <div className={classes.characterDispaly}>
          <ModelViewer src={glbFile} />
        </div> */}
      </div>
      <div
        className={
          characterOptions
            ? `${classes.character} ${classes.hoverbar}`
            : `${classes["bar--secondary"]} ${classes.bar} ${classes.opacities}`
        }
      >
        <div className={classes.character}>
          <div className={classes.characterBody}>
            <div className={classes.characterBodyTitle}> SAVED CHARACTOR </div>
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
                    <div
                      className={`${classes.buttonTitle} ${classes.characterText}`}
                    >
                      Title
                    </div>
                    <div className={classes.colorFlow} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.characterDispaly}></div>
          <div className={classes.characterElement}>
            {charactor.map((item, index) => (
              <div
                key={index}
                className={`${classes.card} ${classes.characterElementWidth} `}
              >
                <img
                  src={item.image}
                  alt="character"
                  className={classes.cardImg}
                />
                <div className={classes.colorFlow} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const charactor = [
  { id: 0, title: "OUTFIT", image: "./images/inventory/glider.png" },
  { id: 1, title: "BACKBLING", image: "./images/inventory/contrail.png" },
  { id: 2, title: "PICKAXE", image: "./images/inventory/back.png" },
  { id: 3, title: "GLIDER", image: "./images/inventory/plan.png" },
  { id: 4, title: "CONTRAIL", image: "./images/inventory/charactor.png" },
  { id: 5, title: "AURA", image: "./images/inventory/empty.png" },
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

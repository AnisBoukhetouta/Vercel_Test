import React, { useState } from "react";
import classes from "./inventoryView.module.css";
import AppConstants from "../../../AppConstants";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ModelViewer from "../../modelViewer/modelViewer";
import Spread from "./spread/spread";

interface props {
  handleAdd: () => void;
}

export default function InventoryView({ handleAdd }: props) {
  const navigate = useNavigate();
  const [characterOptions, setCharacterOptions] = useState(false);
  const [equipType, setEquipType] = React.useState("Outfit");
  const [uid, setUid] = React.useState("");
  const [fetchedData, setFetchedData] = React.useState<any>([]);
  const [glbFile, setGlbFile] = React.useState("");
  const [imageFiles, setImageFiles] = React.useState<any[]>([]);
  const [glbFiles, setGlbFiles] = React.useState<any[]>([]);

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
    setGlbFiles(fetchedData.map((item) => item.files[1]));
    setImageFiles(fetchedData.map((item) => item.files[0]));
  }, [fetchedData]);

  React.useEffect(() => {
    if (glbFiles.length > 0) {
      const [glb] = glbFiles.filter((glb) => glb.fileType === equipType);
      setGlbFile(`${AppConstants.baseUrl}/${glb.destination}/${glb.fileName}`);
    }
  }, [glbFiles, equipType]);

  return (
    <div className={classes.inventoryView}>
      {!characterOptions && (
        <div className={classes.cotainer}>
          <div className={classes.optionsContainer}>
            <div className={classes.navTitle}>CHARACTER</div>
            <div className={classes.optionTitle}>{equipType.toUpperCase()}</div>
            <div className={classes.equipCards}>
              {AppConstants.characterItems.map((item, key) => {
                let [image] = (
                  imageFiles.length > 0
                    ? imageFiles
                    : AppConstants.characterItems
                ).filter((x) => x.fileType === item.fileType && x);
                return (
                  <div
                    className={classes.card}
                    key={key}
                    onClick={() => setEquipType(item.fileType)}
                  >
                    <div className={classes.alarm}>14</div>
                    <img
                      src={
                        image.destination
                          ? `${AppConstants.baseUrl}/${image.destination}/${image.fileName}`
                          : item.image
                      }
                      alt="character"
                      className={classes.cardImg}
                    />
                    <div className={classes.cardAdd}>
                      <Spread handleAdd={handleAdd} />
                    </div>
                    <div className={classes.colorFlow} />
                  </div>
                );
              })}
            </div>

            <button className={classes.buttons}>SAVE CHARACTOR</button>
            <button
              className={`${classes.buttons} ${classes.optionButton}`}
              onClick={() => setCharacterOptions(true)}
            >
              OPTIONS
            </button>
          </div>
          {glbFile.length > 0 && (
            <div className={classes.modelViewerContainer}>
              <ModelViewer src={glbFile} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

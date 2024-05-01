import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import classes from "./modelBox.module.css";
import GameCard from "../gameCards/gameCard";
import AppConstants from "../../AppConstants";
import { LinearProgress } from "@mui/material";
import { toDataURL } from "../imageCach";
import Playground from "../../pages/playground/playground";
import axios from "axios";
import GameLayout from "../../navigation/layout/gamelayout";
import Courses from "../../pages/courses/courses";
import { Game } from "../../@types/dataTypes";

export default function ModelBox() {
  const [fetchedData, setFetchedData] = React.useState<Game[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [view, setView] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Game>();
  const [index, setIndex] = React.useState<number>(0);

  React.useEffect(() => {
    console.log("~~~~~~~~~~~~~", item);
    if (item) {
      setLoading(true);
      // toDataURL(item.imageOver, function (dataUrl) {
      setLoading(false);
      // });
    }
  }, [item]);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get(AppConstants.getFilesUrl)
          .then((response) => {
            console.log("FetchedData~~~~~~", response.data);
          })
          .catch((error) => console.log(error));
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);

  const handleWheel = (e) => {
    const { deltaY } = e;
    if (deltaY < 0) {
      setIndex(index >= 13 ? 13 : index + 1);
    } else setIndex(index <= -5 ? -5 : index - 1);
  };

  const handleSetItem = (e: Game) => {
    setItem(e);
    setIndex(0);
  };

  return (
    <>
      {!view && (
        <GameLayout>
          <div
            className={classes.wheel}
            onWheel={index < 10 ? handleWheel : () => {}}
          >
            <Canvas
              camera={{ position: [1, 1, 6.5], fov: 50 }}
              className={classes.modelBox}
              style={{
                position: "relative",
                background:
                  "radial-gradient(rgb(0, 166, 255), rgb(34, 51, 216))",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "Top",
              }}
              shadows
            >
              <Model />
            </Canvas>
            {loading && (
              <LinearProgress className={classes.progressbar} color="error" />
            )}
            <div className={classes.miniCard}>
              <GameCard item={fetchedData[0]} link={true} />
            </div>
            <div
              className={
                index < 5 ? classes.startCard : classes.startCardRemove
              }
            >
              <div>
                <h2>ZERO BUILD - BATTLE ROYALE</h2>
              </div>
              <div className={classes.buttonline}>
                <button
                  className={classes.lobbyHeaderButton}
                  type="button"
                  onClick={() => item && setView(true)}
                >
                  RANKED: OFF
                  <br />
                  SQUAD - FILL
                </button>
              </div>
            </div>
            <div className={classes.topGamesContainer}>
              <div
                className={
                  index < 5
                    ? classes.topGames
                    : index < 10
                    ? classes.topGamesHalfShow
                    : classes.topGamesShow
                }
              >
                <div
                  style={{
                    height: "100vh",
                    overflow: index > 10 ? "scroll" : "hidden",
                    scrollbarWidth: "none",
                  }}
                >
                  <Courses onSet={handleSetItem} />
                </div>
              </div>
            </div>
            <div
              className={index < 10 ? classes.hiddenGround : classes.showGround}
            />
          </div>
        </GameLayout>
      )}
      {/*!!view && (
        <div className={classes.playground}>
          <Playground item={!!item ? item._id : fetchedData[0]._id} />
        </div>
      ) */}
    </>
  );
}

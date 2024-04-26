import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import classes from "./modelBox.module.css";
import TopGames, { Data, Item } from "../topGames/topGames";
import GameCard from "../gameCards/gameCard";
import AppConstants from "../../AppConstants";
import { LinearProgress } from "@mui/material";
import { toDataURL } from "../imageCach";
import Playground from "../../pages/playground/playground";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GameLayout from "../../navigation/layout/gamelayout";

export default function ModelBox() {
  const [fetchedData, setFetchedData] = React.useState<Item[]>([]);
  // const fetchedData: Item[] = [];
  const [loading, setLoading] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);
  const [item, setItem] = useState<any>();
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (item) {
      setLoading(true);
      toDataURL(item.imageOver, function (dataUrl) {
        setLoading(false);
      });
    }
  }, [item]);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get(AppConstants.getFilesUrl)
          .then((response) => {
            setFetchedData((prevStore) => {
              // Use the previous state (prevStore) to update the state
              return [
                ...prevStore,
                ...response.data.map((item) => ({
                  _id: item._id,
                  imageOver: `${AppConstants.baseUrl}/${item.files[0].destination}/${item.files[2].fileName}`,
                })),
              ];
            });
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

  const handleSetItem = (e) => {
    setItem(e);
    setIndex(0);
  };

  return (
    <>
      {!view && (
        <GameLayout>
          <div onWheel={handleWheel}>
            <div>
              <Canvas
                camera={{ position: [1, 1, 5], fov: 50 }}
                className={classes.modelBox}
                style={{
                  position: "relative",
                  backgroundImage: `url(${
                    item
                      ? item.imageOver
                      : fetchedData.length
                      ? fetchedData[0].imageOver
                      : ""
                  })`,
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
              {fetchedData.length && (
                <div className={classes.miniCard}>
                  <GameCard item={item ?? fetchedData[0]} link={true} />
                </div>
              )}

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
                    onClick={() => setView(true)}
                  >
                    RANKED: OFF
                    <br />
                    SQUAD - FILL
                  </button>
                </div>
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
                <TopGames items={fetchedData || []} setItem={handleSetItem} />
                <TopGames items={fetchedData || []} setItem={handleSetItem} />
                <TopGames items={fetchedData || []} setItem={handleSetItem} />
                <TopGames items={fetchedData || []} setItem={handleSetItem} />
              </div>
            </div>
            <div
              className={index < 10 ? classes.hiddenGround : classes.showGround}
            ></div>
          </div>
        </GameLayout>
      )}
      {!!view && (
        <div className={classes.playground}>
          <Playground item={!!item ? item._id : fetchedData[0]._id} />
        </div>
      )}
    </>
  );
}

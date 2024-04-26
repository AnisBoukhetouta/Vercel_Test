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
  const [fetchedData, setFetchedData] = React.useState<Data[]>([]);
  // const items: Item[] = [];
  const [loading, setLoading] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);
  const [item, setItem] = useState<any>();
  const [index, setIndex] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([]);

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
            setFetchedData(response.data);
            setItems((prevStore) => {
              console.log("~~~~~~~~~~~~~", prevStore);
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

  useEffect(() => {
    console.log("@@@@@@@@@@@@@@@", items);
  }, [items]);

  // fetchedData.map((data, index) => {
  //   items.push({
  //     _id: data._id,
  //     imageOver: `${AppConstants.baseUrl}/${data.files[0].destination}/${data.files[2].fileName}`,
  //   });
  // });

  const handleWheel = (e) => {
    const { deltaY } = e;
    if (deltaY < 0) {
      setIndex(index + 1);
    } else setIndex(index - 1);
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
                      : items.length
                      ? items[0].imageOver
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
              {items.length && (
                <div className={classes.miniCard}>
                  <GameCard item={item ?? items[0]} link={true} />
                  <div className={classes.buttonline}>
                    <button
                      className={classes.lobbyHeaderButton}
                      type="button"
                      onClick={() => setView(true)}
                    >
                      PLAY NOW
                    </button>
                  </div>
                </div>
              )}
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
                <TopGames items={items || []} setItem={setItem} />
                <TopGames items={items || []} setItem={setItem} />
                <TopGames items={items || []} setItem={setItem} />
                <TopGames items={items || []} setItem={setItem} />
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
          <Playground item={!!item ? item._id : items[0]._id} />
        </div>
      )}
    </>
  );
}

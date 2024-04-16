import React, { useCallback, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import classes from "./modelBox.module.css";
import TopGames from "../topGames/topGames";
import GameCard from "../gameCards/gameCard";
import AppConstants from "../../AppConstants";
import { Button, LinearProgress } from "@mui/material";
import { toDataURL } from "../imageCach";
import Playground from "../../pages/playground/playground";

export default function ModelBox() {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>(
    AppConstants.cardData[0].imageCardOver
  );
  const [view, setView] = useState<boolean>(false);
  const [item, setItem] = useState<any>();

  useEffect(() => {
    if (item) {
      setLoading(true);
      toDataURL(item.imageOver, function (dataUrl) {
        setImageUrl(dataUrl);
        setLoading(false);
      });
    }
  }, [item]);

  const ModelView = useCallback(() => <Model />, []);
  return (
    <>
      <Canvas
        camera={{ position: [1, 1, 5], fov: 50 }}
        className={classes.modelBox}
        style={{
          position: "relative",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "Top",
        }}
        shadows
      >
        <ModelView />
      </Canvas>
      {loading && (
        <LinearProgress className={classes.progressbar} color="error" />
      )}
      {!!view && (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100vw" }}>
          <Playground item={item} />
        </div>
      )}
      <div className={classes.miniCard}>
        <GameCard
          item={item || AppConstants.cardData[0]}
          link={true}
          setView={() => setView(true)}
          onSetItem={(item) => setItem(item)}
        />
      </div>
      <TopGames setItem={setItem} />
    </>
  );
}

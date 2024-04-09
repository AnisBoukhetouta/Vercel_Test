import React, { useCallback, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import classes from "./modelBox.module.css";
import TopGames from "../topGames/topGames";
import GameCard from "../gameCards/gameCard";
import AppConstants from "../../AppConstants";
import CachImages from "../imageCach";
import { LinearProgress } from "@mui/material";
import { toDataURL } from "../imageCach";

export default function ModelBox() {
  const [loading, setLoading] = useState<boolean>(true);
  const [imageUrl, setImageUrl] = useState<string>("/images/home/10302.jpg");
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
      {loading && <LinearProgress color="error" sx={{ zIndex: 3 }} />}
      <Canvas
        camera={{ position: [1, 1, 5], fov: 50 }}
        className={classes.modelBox}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "Top",
        }}
        shadows
      >
        <ModelView />
      </Canvas>

      <div className={classes.miniCard}>
        <GameCard item={item || AppConstants.cardData[0]} />
      </div>

      <TopGames setItem={setItem} />
    </>
  );
}

import React, { useCallback, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import classes from "./modelBox.module.css";
import TopGames from "../topGames/topGames";
import GameCard from "../gameCards/gameCard";
import AppConstants from "../../AppConstants";
import CachImages from "../imageCach";
import { LinearProgress } from "@mui/material";

export default function ModelBox() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [item, setItem] = React.useState<any>();
  const ModelView = useCallback(() => <Model />, []);
  useEffect(() => {
    item !== undefined
      ? CachImages({ url: item.imageOver, setIsLoading: setLoading })
      : CachImages({ url: "/images/home/10302.jpg", setIsLoading: setLoading });
    setLoading(false);
    console.log("33333333333333333", loading);
  });
  return (
    <>
      {!loading && <LinearProgress color="error" sx={{ zIndex: 3 }} />}
      <Canvas
        camera={{ position: [1, 1, 5], fov: 50 }}
        className={classes.modelBox}
        style={{
          backgroundImage: `url(${
            item !== undefined ? item.imageOver : "/images/home/10302.jpg"
          })`,
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
        <GameCard item={item !== undefined ? item : AppConstants.cardData[0]} />
      </div>

      <TopGames setItem={setItem} />
    </>
  );
}

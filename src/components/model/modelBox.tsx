import React, { useCallback, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import classes from "./modelBox.module.css";
import TopGames from "../topGames/topGames";
import GameCard from "../gameCards/gameCard";
import AppConstants from "../../AppConstants";
import CachImages from "../imageCach";
import { LinearProgress } from "@mui/material";

export default function ModelBox() {
  const [loading, setLoading] = useState<boolean>(true);
  const [item, setItem] = useState<any>();

  useEffect(() => {
    // Preload image and set loading state accordingly
    const preloadImage = async () => {
      try {
        setLoading(true);
        const imageUrl = item ? item.imageOver : "/images/home/10302.jpg";
        await CachImages({ url: imageUrl, setIsLoading: setLoading });
      } catch (error) {
        console.error("Error preloading image:", error);
      }
    };

    preloadImage();
    console.log('loading~~~~~~~~~~~~~~', loading)
  }, [item]);

  const ModelView = useCallback(() => <Model />, []);

  return (
    <>
      {loading && <LinearProgress color="error" sx={{ zIndex: 3 }} />}
      <Canvas
        camera={{ position: [1, 1, 5], fov: 50 }}
        className={classes.modelBox}
        style={{
          backgroundImage: `url(${
            item ? item.imageOver : "/images/home/10302.jpg"
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
        <GameCard item={item || AppConstants.cardData[0]} />
      </div>

      <TopGames setItem={setItem} />
    </>
  );
}

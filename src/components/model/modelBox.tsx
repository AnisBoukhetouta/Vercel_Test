import React, { useCallback, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import classes from "./modelBox.module.css";
import TopGames from "../topGames/topGames";
import GameCard from "../gameCards/gameCard";
import AppConstants from "../../AppConstants";
import { LinearProgress } from "@mui/material";
import { toDataURL } from "../imageCach";
import { NavLink } from "react-router-dom";

export default function ModelBox() {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>(
    AppConstants.cardData[0].imageCardOver
  );
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
      <div className={classes.miniCard}>
        <NavLink
          key={item ? item._id : AppConstants.cardData[0]._id}
          to="/playground"
          state={item ? item._id : AppConstants.cardData[0]._id}
          style={{ textDecoration: "none" }}
        >
          <GameCard item={item || AppConstants.cardData[0]} link={true} />
        </NavLink>
      </div>

      <TopGames setItem={setItem} />
    </>
  );
}

import React, { useEffect } from "react";
import classes from "./lobbyHeaderGame.module.css";
import axios from "axios";
import AppConstants from "../../AppConstants";
import { Game } from "../../@types/dataTypes";
import FortGameCards from "../fortGameCards/fortGameCards";

export default function LobbyHeaderGame() {
  const [fetchedData, setFetchedData] = React.useState<Game[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get(AppConstants.getFilesUrl)
          .then((response) => {
            setFetchedData((prevState) => {
              return [...prevState, ...response.data.map((data) => data)];
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

  return (
    <div className={classes.lobodyGame}>
      <div className={classes.topGames}>
        <div className={classes.title}>BY EPIC</div>
        <FortGameCards gameDatas={fetchedData} />
      </div>
    </div>
  );
}

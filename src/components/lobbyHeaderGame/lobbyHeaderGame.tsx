import React, { useEffect } from "react";
import classes from "./lobbyHeaderGame.module.css";
import axios from "axios";
import GameCards from "../gameCards/gameCards";
import AppConstants from "../../AppConstants";

interface Item {
  _id: string;
  imageOver: string;
}

export interface Data {
  _id: string;
  files: {
    category: string;
    controls: string;
    description: string;
    destination: string;
    enCoding: string;
    fieldName: string;
    fileName: string;
    gameTitle: string;
    gameType: string;
    mimeType: string;
    originalName: string;
    path: string;
    size: string;
    tags: string;
    __v: string;
    _id: string;
  }[];
}

export default function LobbyHeaderGame() {
  const [fetchedData, setFetchedData] = React.useState<Data[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get(AppConstants.getFilesUrl)
          .then((response) => {
            setFetchedData((prevState) => {
              return [
                ...prevState,
                ...response.data.map((data) => ({
                  _id: data._id,
                  imageOver: data.files[0].path,
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

  return (
    <div className={classes.lobodyGame}>
      <div className={classes.topGames}>
        <div className={classes.title}>BY EPIC</div>
        <GameCards cardData={fetchedData} />
      </div>
    </div>
  );
}

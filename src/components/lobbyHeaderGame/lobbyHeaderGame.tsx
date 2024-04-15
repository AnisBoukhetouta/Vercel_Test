import React, { useEffect, useState } from "react";
import classes from "./lobbyHeaderGame.module.css";
import { Container } from "@mui/material";
import axios from "axios";
import GameCards from "../gameCards/gameCards";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import GameCard from "../gameCards/gameCard";
import AppConstants from "../../AppConstants";
import Carouselbutton from "./carouselButton";

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

interface Props {
  setItem: (e: any) => void;
}

export default function LobbyHeaderGame({ setItem }: Props) {
  const [fetchedData, setFetchedData] = React.useState<Data[]>([]);
  const [mouseOver, setMouseOver] = useState(false);
  const items: Item[] = [];
  const getFilesUrl = import.meta.env.VITE_GET_FILES;
  const baseUrl = import.meta.env.VITE_APP_BASE;

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get(getFilesUrl)
          .then((response) => {
            setFetchedData(response.data);
            console.log("FetchedData~~~~~~", response.data);
          })
          .catch((error) => console.log(error));
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);

  fetchedData.map((data, index) => {
    items.push({
      _id: data._id,
      imageOver: `${baseUrl}/${data.files[0].destination}/${data.files[2].fileName}`,
    });
  });

  return (
    <div className={classes.lobodyGame}>
      <div className={classes.topGames} onMouseOver={() => setMouseOver(true)}>
        <div className={classes.title}>BY EPIC</div>
        <ScrollingCarousel
          children={AppConstants.cardData.map((item) => (
            <GameCards cardData={items} />
          ))}
        />
        {/* {mouseOver && <Carouselbutton />} */}
      </div>
    </div>
  );
}

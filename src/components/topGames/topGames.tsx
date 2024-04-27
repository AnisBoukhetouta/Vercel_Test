import React from "react";
import classes from "./topGames.module.css";
import AppConstants from "../../AppConstants";
import GameCard from "../gameCards/gameCard";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import axios from "axios";
import NewGameCard from "../newGameCard/newGameCard";

interface Props {
  items: any[];
  setItem: (e: any) => void;
}

export interface Item {
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
export default function TopGames({ items, setItem }: Props) {
  return (
    <ScrollingCarousel
      children={items.map((item, index) => (
        <GameCard onSetItem={setItem} key={index} item={item} />
      ))}
    />
  );
}

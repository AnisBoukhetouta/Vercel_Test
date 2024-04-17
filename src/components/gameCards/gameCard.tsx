import * as React from "react";
import classes from "./card.module.css";
import CardData from "./gameCardData";
import { Skeleton } from "@mui/material";

interface Props {
  onSetItem?: (e: any) => void;
  link?: boolean;
  item: any;
}

export default function GameCard({ item, onSetItem, link }: Props) {
  const [mouseOver, setMouseOver] = React.useState(false);

  const handleClick = (over: boolean) => {
    onSetItem && onSetItem(item);
  };

  return (
    <div className={classes.cardBody}>
      {item ? (
        <div
          className={classes.center}
          key={item._id}
          onClick={() => handleClick(!mouseOver)}
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
        >
          <div className={classes.card}>
            <img
              src={item.imageOver}
              alt="game"
              className={classes.enlargeImage}
            />
          </div>
          {!link && <CardData item={item} />}
        </div>
      ) : (
        <Skeleton variant="rectangular" width={235} height={!link?198:120}/>
      )}
    </div>
  );
}

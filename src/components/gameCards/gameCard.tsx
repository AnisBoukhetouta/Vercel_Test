import * as React from "react";
import classes from "./card.module.css";
import CardData from "./gameCardData";

interface Props {
  onSetItem?: (e: any) => void;
  link?: boolean;
  item: any;
  setView?: () => void;
}

export default function GameCard({ item, onSetItem, link, setView }: Props) {
  const [mouseOver, setMouseOver] = React.useState(false);

  const handleClick = (over: boolean) => {
    onSetItem && onSetItem(item);
  };

  return (
    <div className={classes.cardBody}>
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
        <CardData setView={setView} item={item} link={link} />
      </div>
    </div>
  );
}

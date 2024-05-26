import React from 'react';

import { useGameContext } from 'src/game/hook/use-game-context';

import classes from './frotnite-card.module.scss';
import FortniteButton from '../fortnite-button/fortnite-button';
import FortniteButtonImage from '../fortnite-button/fortnite-button-image';

interface Props {
  title: string;
  mainImage: string;
  secondImage: string;
}

export default function FortniteCoupleCard({ title, mainImage, secondImage }: Props) {
  const { setIndex, setGameTitle } = useGameContext();

  const handleClick = () => {
    setIndex(0);
    console.log('CLICKED');
    setGameTitle(title);
  };

  return (
    <div className={classes.coupleCard}>
      <FortniteButton
        color="yellow"
        type="secondary"
        onClick={handleClick}
        text={title}
        subtext={title}
      >
        <FortniteButtonImage
          src={mainImage}
          width="120%"
          height="95%"
          right="15%"
          top="auto"
          bottom="-40px"
        />
        <FortniteButtonImage
          src={secondImage}
          width="130%"
          height="90%"
          left="15%"
          top="auto"
          bottom="-40px"
        />
      </FortniteButton>
    </div>
  );
}

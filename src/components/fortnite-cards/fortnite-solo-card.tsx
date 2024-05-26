import React from 'react';

import { useGameContext } from 'src/game/hook/use-game-context';

import classes from './frotnite-card.module.scss';
import FortniteButton from '../fortnite-button/fortnite-button';
import FortniteButtonImage from '../fortnite-button/fortnite-button-image';

interface Props {
  title: string;
  mainImage: string;
}

export default function FortniteSoloCard({ title, mainImage }: Props) {
  const { setIndex, setGameTitle } = useGameContext();

  const handleClick = () => {
    setIndex(0);
    console.log('CLICKED');
    setGameTitle(title);
  };

  return (
    <div className={classes.soloCard}>
      <FortniteButton
        color="blue"
        type="secondary"
        onClick={handleClick}
        text={title}
        subtext={title}
      >
        <FortniteButtonImage top="auto" bottom="0" src={mainImage} />
      </FortniteButton>
    </div>
  );
}

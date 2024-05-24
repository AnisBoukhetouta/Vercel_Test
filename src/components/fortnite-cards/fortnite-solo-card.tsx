import React from 'react';

import { useGameContext } from 'src/game/hook/use-game-context';

import { Game } from './types';
import classes from './frotnite-card.module.scss';
import FortniteButton from '../fortnite-button/fortnite-button';
import FortniteButtonImage from '../fortnite-button/fortnite-button-image';

interface Props {
  cardData?: Game;
  mainImage: string;
}

export default function FortniteSoloCard({ cardData, mainImage }: Props) {
  const { setIndex, setGameTitle } = useGameContext();

  const handleClick = () => {
    setIndex(0);
    console.log('CLICKED');
    setGameTitle(cardData?.gameTitle ?? 'New');
  };
  console.log('~~~~~~~~~~~~~~~~~~', mainImage);

  return (
    <div className={classes.soloCard}>
      <FortniteButton
        color="blue"
        type="secondary"
        onClick={handleClick}
        text={cardData?.gameTitle ?? 'New'}
        subtext={cardData?.gameSubTitle ?? 'New'}
      >
        <FortniteButtonImage
          top="auto"
          bottom="0"
          src={mainImage ?? '/assets/images/fortnite/images/character.webp'}
        />
      </FortniteButton>
    </div>
  );
}

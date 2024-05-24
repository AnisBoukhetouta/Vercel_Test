import React from 'react';

import { useGameContext } from 'src/game/hook/use-game-context';

import { Game } from './types';
import classes from './frotnite-card.module.scss';
import FortniteButton from '../fortnite-button/fortnite-button';
import FortniteButtonImage from '../fortnite-button/fortnite-button-image';

interface Props {
  cardData?: Game;
  mainImage: string;
  secondImage: string;
}

export default function FortniteCoupleCard({ cardData, mainImage, secondImage }: Props) {
  const { setIndex, setGameTitle } = useGameContext();

  const handleClick = () => {
    setIndex(0);
    console.log('CLICKED');
    setGameTitle(cardData?.gameTitle ?? 'New');
  };

  console.log('~~~~~~~~~~~~~~~~~~', mainImage);
  return (
    <div className={classes.coupleCard}>
      <FortniteButton
        color="yellow"
        type="secondary"
        onClick={handleClick}
        text={cardData?.gameTitle ?? 'New'}
        subtext={cardData?.gameSubTitle ?? 'New'}
      >
        <FortniteButtonImage
          src={mainImage ?? '/assets/images/fortnite/images/evie.webp'}
          width="120%"
          height="95%"
          right="15%"
          top="auto"
          bottom="-40px"
        />
        <FortniteButtonImage
          src={secondImage ?? '/assets/images/fortnite/images/character.webp'}
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

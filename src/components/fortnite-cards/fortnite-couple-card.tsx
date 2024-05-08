import React from 'react';

import { Game } from './types';
import classes from './frotnite-card.module.scss';
import FortniteButton from '../fortnite-button/fortnite-button';
import FortniteButtonImage from '../fortnite-button/fortnite-button-image';

interface Props {
  cardData: Game;
}

export default function FortniteCoupleCard({ cardData }: Props) {
  return (
    <div className={classes.card}>
      <FortniteButton
        color="yellow"
        type="secondary"
        text={cardData.gameTitle ?? 'New'}
        subtext={cardData.gameSubTitle ?? 'New'}
      >
        <FortniteButtonImage
          src="/assets/images/fortnite/images/evie.webp"
          width="120%"
          height="95%"
          right="5%"
          top="auto"
          bottom="-40px"
        />
        <FortniteButtonImage
          src="/assets/images/fortnite/images/character.webp"
          width="130%"
          height="90%"
          left="7%"
          top="auto"
          bottom="0"
        />
      </FortniteButton>
    </div>
  );
}
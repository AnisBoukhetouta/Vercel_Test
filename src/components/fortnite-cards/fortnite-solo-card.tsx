import React from 'react';

import { Game } from './types';
import classes from './frotnite-card.module.scss';
import FortniteButton from '../fortnite-button/fortnite-button';
import FortniteButtonImage from '../fortnite-button/fortnite-button-image';

interface Props {
  cardData: Game;
}

export default function FortniteSoloCard({ cardData }: Props) {
  return (
    <div className={classes.card}>
      <FortniteButton
        color="blue"
        type="secondary"
        text={cardData.gameTitle ?? 'New'}
        subtext={cardData.gameSubTitle ?? 'New'}
      >
        <FortniteButtonImage top="auto" bottom="0" src="/assets/images/fortnite/images/character.webp" />
      </FortniteButton>
    </div>
  );
}

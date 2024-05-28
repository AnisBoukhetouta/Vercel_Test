import React from 'react';

import classes from './frotnite-card.module.scss';
import FortniteButton from '../fortnite-button/fortnite-button';
import FortniteButtonImage from '../fortnite-button/fortnite-button-image';

interface Props {
  title: string;
  description: string;
  mainImage: string;
  onClick: ({ title, description }: any) => void;
}

export default function FortniteSoloCard({ title, description, mainImage, onClick }: Props) {
  return (
    <div className={classes.soloCard}>
      <FortniteButton
        color="blue"
        type="secondary"
        onClick={() => onClick({ title, description })}
        text={title}
        subtext={title}
      >
        <FortniteButtonImage top="auto" bottom="0" src={mainImage} />
      </FortniteButton>
    </div>
  );
}

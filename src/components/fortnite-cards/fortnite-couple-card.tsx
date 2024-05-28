import React from 'react';

import classes from './frotnite-card.module.scss';
import FortniteButton from '../fortnite-button/fortnite-button';
import FortniteButtonImage from '../fortnite-button/fortnite-button-image';

interface Props {
  title: string;
  description: string;
  mainImage: string;
  secondImage: string;
  onClick: ({ title, description }: any) => void;
}

export default function FortniteCoupleCard({
  title,
  description,
  mainImage,
  secondImage,
  onClick,
}: Props) {
  return (
    <div className={classes.coupleCard}>
      <FortniteButton
        color="yellow"
        type="secondary"
        onClick={() => onClick({ title, description })}
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

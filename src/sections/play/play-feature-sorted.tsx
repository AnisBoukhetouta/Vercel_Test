import React from 'react';
import { isArray } from 'lodash';

import { Stack } from '@mui/material';

import { DEV_ASSET_API } from 'src/config-global';
import { useGameContext } from 'src/game/hook/use-game-context';

import FortniteSoloCard from 'src/components/fortnite-cards/fortnite-solo-card';
import FortniteCoupleCard from 'src/components/fortnite-cards/fortnite-couple-card';

export function GameCard({ cardData }: any) {
  const { setIndex, setGameTitle, setDescription } = useGameContext();

  const handleClick = ({ title, description }: any) => {
    setIndex(0);
    console.log('CLICKED');
    setGameTitle(title);
    setDescription(description);
  };
  const mainImagePath = cardData.files[0];
  if (cardData.secondColor) {
    const secondImagePath = cardData.files[1];
    return (
      <FortniteCoupleCard
        title={cardData.gameTitle}
        description={cardData.gameDescription}
        mainImage={`${DEV_ASSET_API}/${mainImagePath.mainImage}`}
        secondImage={`${DEV_ASSET_API}/${secondImagePath.secondImage}`}
        onClick={handleClick}
      />
    );
  }
  return (
    <FortniteSoloCard
      title={cardData.gameTitle}
      description={cardData.gameDescription}
      mainImage={`${DEV_ASSET_API}/${mainImagePath.mainImage}`}
      onClick={handleClick}
    />
  );
}

export default function PlayFeatureSorted() {
  const { data } = useGameContext();

  console.log(data);

  return (
    <Stack
      direction="column"
      width="35%"
      height="100%"
      sx={{ overflowY: 'scroll', scrollbarWidth: 'none' }}
      gap="9px"
    >
      <Stack direction="column" alignItems="start" gap="9px">
        {isArray(data) && data.length > 0 && data.map((x) => <GameCard key={x._id} cardData={x} />)}
      </Stack>
    </Stack>
  );
}

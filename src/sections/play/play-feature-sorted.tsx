import { Stack, Typography } from '@mui/material';

import { _playFeatured } from 'src/_mock';

import PlayFeatured from './play-featured';

export default function PlayFeatureSorted() {
  return (
    <Stack direction="column" width="35%" height="100%" sx={{ overflowY: 'scroll' }} gap="9px">
      {group.map((x, index) => (
        <FeatureGroup key={index} group={x} />
      ))}
    </Stack>
  );
}

interface Prop {
  group: string;
}

const FeatureGroup = ({ group }: Prop) => (
  <Stack direction="column" alignItems="start" gap="9px">
    <Typography sx={{ fonstSize: 16, fontWeight: 600 }}>{group}</Typography>
    {cards.map((x) => (
      <PlayFeatured key={x} list={_playFeatured} sx={{ width: 169, height: 129 }} height={129} />
    ))}
  </Stack>
);

const group = ['Speed', 'Shelds', 'Endurance'];
const cards = ['first', 'second'];

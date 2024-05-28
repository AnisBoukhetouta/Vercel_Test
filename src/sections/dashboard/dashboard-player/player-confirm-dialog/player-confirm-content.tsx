import { Box } from '@mui/material';

import FortniteSoloCard from 'src/components/fortnite-cards/fortnite-solo-card';

export default function PlayerConfirmContent() {
  const container = count.map((index) => (
    <Box key={index} component="div" sx={{ fontSize: 'body2' }}>
      <FortniteSoloCard
        title="Skin"
        description="skin"
        mainImage="/assets/images/fortnite/images/character.webp"
        onClick={() => {}}
      />
    </Box>
  ));

  return container;
}

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

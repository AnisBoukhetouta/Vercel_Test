import { Grid } from '@mui/material';

import FortniteSoloCard from 'src/components/fortnite-cards/fortnite-solo-card';

export default function PlayerConfirmContent() {
  const container = count.map((index) => (
    <Grid
      item
      key={index}
      xs={2}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <FortniteSoloCard
        title="Skin"
        description="Skin"
        mainImage="/assets/images/fortnite/images/character.webp"
        onClick={() => {}}
      />
    </Grid>
  ));

  return <Grid container>{container}</Grid>;
}

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

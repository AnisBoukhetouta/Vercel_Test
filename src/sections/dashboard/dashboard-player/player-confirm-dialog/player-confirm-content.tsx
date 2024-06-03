import { Grid } from '@mui/material';

import FortniteSoloCard from 'src/components/fortnite-cards/fortnite-solo-card';

type PlayerConfirmProps = {
  characters: any[] | any;
  setGlbId: (e: string) => void;
};

export default function PlayerConfirmContent({ characters, setGlbId }: PlayerConfirmProps) {
  const handleClick = (e: any) => {
    setGlbId(e._id);
  };

  const container = characters.map((skin: any, index: number) => (
    <Grid
      item
      key={index}
      xs={2.4}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <FortniteSoloCard
        title="Skin"
        description="Skin"
        mainImage={skin.coverImage}
        onClick={() => handleClick(skin)}
      />
    </Grid>
  ));

  return <Grid container>{container}</Grid>;
}

import { Paper, Stack } from '@mui/material';

import { _carouselSmallCards } from 'src/_mock';
import { useGameContext } from 'src/game/hook/use-game-context';

import { CustomButton } from 'src/components/custom-button';
import CustomCarousel from 'src/components/custom-carousel/custom-carousel';
import { HeaderTypography, NormalTypography } from 'src/components/custom-typo/custom-typo';

export default function PlayLeftPanel() {
  const { gameTitle } = useGameContext();
  return (
    <Stack direction="column" mt={3}>
      <CustomCarousel
        height="167px"
        list={_carouselSmallCards}
        sx={{ width: 344, height: 167, mb: 5 }}
        header="MULTIPLAYER"
        buttonTitle="Play Now"
      />
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 344,
          height: 176,
          borderRadius: '16px',
          p: 5,
        }}
      >
        <div style={{ flexGrow: 1 }} />
        <NormalTypography title="Current Game" />
        <div style={{ flexGrow: 1 }} />
        <HeaderTypography title={gameTitle || 'Capture the Flag'} />
        <div style={{ flexGrow: 1 }} />
        <CustomButton title="Play" fullWidth />
        <div style={{ flexGrow: 1 }} />
      </Paper>
    </Stack>
  );
}

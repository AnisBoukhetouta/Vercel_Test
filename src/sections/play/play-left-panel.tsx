import { Paper } from '@mui/material';

import { useGameContext } from 'src/game/hook/use-game-context';

import { CustomButton } from 'src/components/custom-button';
import { HeaderTypography, NormalTypography } from 'src/components/custom-typo/custom-typo';

export default function PlayLeftPanel() {
  const { gameTitle } = useGameContext();
  return (
    <Paper
      elevation={3}
      sx={{
        m: 3,
        p: 5,
        width: 344,
        height: 176,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* <Stack direction="column" m={3}> */}
      {/* <CustomCarousel
        height="167px"
        list={_carouselSmallCards}
        sx={{ width: 344, height: 167, mb: 5 }}
        header="MULTIPLAYER"
        buttonTitle="Play Now"
      /> */}
      <div style={{ flexGrow: 1 }} />
      <NormalTypography title="Current Game" />
      <div style={{ flexGrow: 1 }} />
      <HeaderTypography title={gameTitle || 'Capture the Flag'} />
      <div style={{ flexGrow: 1 }} />
      <CustomButton title="Play" fullWidth />
      <div style={{ flexGrow: 1 }} />
      {/* </Stack> */}
    </Paper>
  );
}

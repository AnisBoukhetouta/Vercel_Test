import { Box } from '@mui/material';

import { PlayView } from 'src/sections/play/view';

//----------------------------------------------------------------

export const metadata = {
  title: 'Play',
  description: 'Play the game',
};

export default function PlayPage() {
  return (
    <Box component="div" sx={{ p: 4, width: '100%', height: '100vh' }}>
      <PlayView />
    </Box>
  );
}

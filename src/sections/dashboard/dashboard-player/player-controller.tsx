'use client';

import { Fab, Stack } from '@mui/material';

import { useDashboardContext } from 'src/dashboard/hook/useDashboardContext';

export default function PlayerController() {
  const { confirm } = useDashboardContext();
  return (
    <Stack direction="row" justifyContent="center" spacing={5} sx={{ p: 3 }}>
      <Fab variant="extended" color="primary" aria-label="Skin" onClick={confirm.onTrue}>
        Skin
      </Fab>
      <Fab
        variant="extended"
        color="primary"
        aria-label="Skin"
        onClick={() => {
          console.log('CLICKED');
        }}
      >
        Back Bling
      </Fab>
      <Fab
        variant="extended"
        color="primary"
        aria-label="Skin"
        onClick={() => {
          console.log('CLICKED');
        }}
      >
        Glider
      </Fab>
      <Fab
        variant="extended"
        color="primary"
        aria-label="Skin"
        onClick={() => {
          console.log('CLICKED');
        }}
      >
        Icon
      </Fab>
    </Stack>
  );
}

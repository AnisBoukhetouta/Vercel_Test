'use client';

import { Fab, Stack } from '@mui/material';

import { CharacterType } from 'src/constants';
import { useDashboardContext } from 'src/dashboard/hook/useDashboardContext';

export default function PlayerController() {
  const { setCharacterId } = useDashboardContext();
  return (
    <Stack direction="row" justifyContent="center" spacing={5} sx={{ p: 3 }}>
      <Fab
        variant="extended"
        color="primary"
        aria-label="Skin"
        onClick={() => {
          setCharacterId(CharacterType.skin);
        }}
      >
        Skin
      </Fab>
      <Fab
        variant="extended"
        color="primary"
        aria-label="Skin"
        onClick={() => {
          setCharacterId(CharacterType.backBling);
        }}
      >
        Back Bling
      </Fab>
      <Fab
        variant="extended"
        color="primary"
        aria-label="Skin"
        onClick={() => {
          setCharacterId(CharacterType.glider);
        }}
      >
        Glider
      </Fab>
      <Fab
        variant="extended"
        color="primary"
        aria-label="Skin"
        onClick={() => {
          setCharacterId(CharacterType.icon);
        }}
      >
        Icon
      </Fab>
    </Stack>
  );
}

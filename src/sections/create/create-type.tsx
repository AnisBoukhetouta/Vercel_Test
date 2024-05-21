'use client';

import React from 'react';

import Radio from '@mui/material/Radio';
import { Stack, RadioGroup, FormControlLabel } from '@mui/material';

import { UseCreateGameContext } from 'src/create-game/hook/use-create-game-context';

import { SmallTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateType() {
  const { setGameType } = UseCreateGameContext();
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <SmallTypography title="GAME TYPE" />
      <RadioGroup
        onChange={(e) => setGameType(e.target.defaultValue)}
        row
        defaultValue="first"
        sx={{ gap: 1, maxWidth: '880px' }}
      >
        <FormControlLabel value="first" control={<Radio size="medium" />} label="Main" />
        <FormControlLabel
          value="second"
          control={<Radio size="medium" />}
          label="Speed Mini-Game"
        />
        <FormControlLabel
          value="third"
          control={<Radio size="medium" />}
          label="Shield Mini-Game"
        />
        <FormControlLabel
          value="forth"
          control={<Radio size="medium" />}
          label="Endurance Mini-Game"
        />
        <FormControlLabel value="fifth" control={<Radio size="medium" />} label="Course" />
        <FormControlLabel value="sixth" control={<Radio size="medium" />} label="Other Mini-Game" />
      </RadioGroup>
    </Stack>
  );
}

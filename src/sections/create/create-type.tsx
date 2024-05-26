'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import Radio from '@mui/material/Radio';
import { Stack, RadioGroup, FormControlLabel } from '@mui/material';

import { GameType } from 'src/constants';

import { SmallTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateType() {
  const { handleChange } = useFormikContext();
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <SmallTypography title="GAME TYPE" />
      <RadioGroup
        name="gameType"
        onChange={handleChange}
        row
        // defaultValue="first"
        sx={{ gap: 1, maxWidth: '880px' }}
      >
        <FormControlLabel value={GameType.first} control={<Radio size="medium" />} label="Main" />
        <FormControlLabel
          value={GameType.second}
          control={<Radio size="medium" />}
          label="Speed Mini-Game"
        />
        <FormControlLabel
          value={GameType.third}
          control={<Radio size="medium" />}
          label="Shield Mini-Game"
        />
        <FormControlLabel
          value={GameType.fourth}
          control={<Radio size="medium" />}
          label="Endurance Mini-Game"
        />
        <FormControlLabel value={GameType.fifth} control={<Radio size="medium" />} label="Course" />
        <FormControlLabel
          value={GameType.sixth}
          control={<Radio size="medium" />}
          label="Other Mini-Game"
        />
      </RadioGroup>
    </Stack>
  );
}

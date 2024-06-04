'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import Radio from '@mui/material/Radio';
import { Grid, RadioGroup, FormControlLabel } from '@mui/material';

import { GameType } from 'src/constants';

import { SmallRequiredTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateType() {
  const { handleChange } = useFormikContext();
  return (
    <Grid container>
      <Grid item xs={1.5}>
        <SmallRequiredTypography title="GAME TYPE" />
      </Grid>
      <Grid item xs={10.5}>
        <RadioGroup
          name="gameType"
          onChange={handleChange}
          row
          // defaultValue="first"
        >
          <Grid item sm={4} md={3} lg={2}>
            <FormControlLabel
              value={GameType.first}
              control={<Radio size="medium" />}
              label="Main"
            />
          </Grid>
          <Grid item sm={4} md={3} lg={2}>
            <FormControlLabel
              value={GameType.second}
              control={<Radio size="medium" />}
              label="Speed Mini-Game"
            />
          </Grid>
          <Grid item sm={4} md={3} lg={2}>
            <FormControlLabel
              value={GameType.third}
              control={<Radio size="medium" />}
              label="Shield Mini-Game"
            />
          </Grid>
          <Grid item sm={4} md={3} lg={2}>
            <FormControlLabel
              value={GameType.fourth}
              control={<Radio size="medium" />}
              label="Endurance Mini-Game"
            />
          </Grid>
          <Grid item sm={4} md={3} lg={2}>
            <FormControlLabel
              value={GameType.fifth}
              control={<Radio size="medium" />}
              label="Course"
            />
          </Grid>
          <Grid item sm={4} md={3} lg={2}>
            <FormControlLabel
              value={GameType.sixth}
              control={<Radio size="medium" />}
              label="Other Mini-Game"
            />
          </Grid>
        </RadioGroup>
      </Grid>
    </Grid>
  );
}

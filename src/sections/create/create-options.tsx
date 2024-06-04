'use client';

import { useFormikContext } from 'formik';

import { Grid, Switch, FormControlLabel } from '@mui/material';

import { SmallRequiredTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateOptions() {
  const { handleChange } = useFormikContext();
  return (
    <Grid container spacing={5}>
      <Grid item xs={2} sm={1.5}>
        <SmallRequiredTypography title="OPTIONS" />
      </Grid>
      <Grid item xs={10} sm={10.5}>
        <FormControlLabel
          control={<Switch name="gameOptions" onChange={handleChange} defaultChecked />}
          label="Requires Fullscreen"
        />
      </Grid>
    </Grid>
  );
}

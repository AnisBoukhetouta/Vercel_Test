'use client';

import { useFormikContext } from 'formik';

import { Grid, TextField } from '@mui/material';

import { SmallRequiredTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateDetails() {
  const { handleChange } = useFormikContext();
  return (
    <Grid container spacing={5}>
      <Grid item xs={2} sm={1.5}>
        <SmallRequiredTypography title="DETAILS" />
      </Grid>
      <Grid item xs={10} sm={10.5}>
        <Grid container spacing={6}>
          <Grid item sm={12} md={6}>
            <TextField
              name="gameTitle"
              onChange={handleChange}
              variant="outlined"
              label="Title"
              fullWidth
              required
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              name="gameDescription"
              variant="outlined"
              label="Description"
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

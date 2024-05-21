'use client';

import { useFormikContext } from 'formik';

import { Stack, Switch, FormControlLabel } from '@mui/material';

import { SmallTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateOptions() {
  const { handleChange } = useFormikContext();
  return (
    <Stack direction="row" gap={1} alignItems="center">
      <SmallTypography title="OPTIONS" />
      <FormControlLabel
        control={<Switch name='gameOptions' onChange={handleChange} defaultChecked />}
        label="Requires Fullscreen"
      />
    </Stack>
  );
}

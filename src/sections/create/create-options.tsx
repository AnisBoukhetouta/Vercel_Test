'use client';

import { Stack, Switch, FormControlLabel } from '@mui/material';

import { SmallTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateOptions() {
  return (
    <Stack direction="row" gap={5} alignItems="center">
      <SmallTypography title="OPTIONS" />
      <FormControlLabel control={<Switch defaultChecked />} label="Requires Fullscreen" />
    </Stack>
  );
}

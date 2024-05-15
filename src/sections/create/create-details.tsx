'use client';

import { Stack, TextField } from '@mui/material';

import { SmallTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateDetails() {
  return (
    <Stack direction="row" gap={5}>
      <SmallTypography title="DETAILS" />
      <Stack direction="row" gap={5} justifyContent="space-between" sx={{ minWidth: '880px' }}>
        <TextField variant="outlined" label="Title" required fullWidth />
        <TextField variant="outlined" label="Description" required fullWidth />
      </Stack>
    </Stack>
  );
}

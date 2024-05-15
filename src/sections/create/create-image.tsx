'use client';

import { Stack } from '@mui/material';

import { SmallTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateImage() {
  return (
    <Stack direction="row" gap={1}>
      <Stack direction="row">
        <SmallTypography title="UPLOAD MAIN IMAGE" />
      </Stack>
      <Stack direction="row">
        <SmallTypography title="UPLOAD SECONDARY IMAGE" />
      </Stack>
    </Stack>
  );
}

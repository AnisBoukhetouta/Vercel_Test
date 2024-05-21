'use client';

import { useFormikContext } from 'formik';

import { Stack, TextField } from '@mui/material';

import { SmallTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateDetails() {
  const { handleChange } = useFormikContext();
  return (
    <Stack direction="row" gap={1}>
      <SmallTypography title="DETAILS" />
      <Stack direction="row" gap={5} sx={{ minWidth: '675px' }}>
        <TextField
          name="gameTitle"
          onChange={handleChange}
          variant="outlined"
          label="Title"
          required
          fullWidth
        />
        <TextField
          name="gameDescription"
          variant="outlined"
          label="Description"
          onChange={handleChange}
          required
          fullWidth
        />
      </Stack>
    </Stack>
  );
}

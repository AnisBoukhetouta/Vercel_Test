'use client';

import { Stack } from '@mui/material';
import { SmallTypography } from 'src/components/custom-typo/custom-typo';
import RadioButtonView from '../_examples/mui/radio-button-view';

export default function CreateType() {
  return (
    <Stack>
      <SmallTypography title="GAME TYPE" />
      {/* <RadioButtonView></RadioButtonView> */}
    </Stack>
  );
}

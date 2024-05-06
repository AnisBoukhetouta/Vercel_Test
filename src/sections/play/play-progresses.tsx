import { Stack } from '@mui/material';

import { CustomProgressBar } from 'src/components/custom-progressbar';

export default function PlayProgresses() {
  return (
    <Stack gap={2}>
      <CustomProgressBar title="Speed" percents={90} color="warning" />
      <CustomProgressBar title="Shields" percents={20} color="info" />
      <CustomProgressBar title="Endurance" percents={40} color="success" />
    </Stack>
  );
}

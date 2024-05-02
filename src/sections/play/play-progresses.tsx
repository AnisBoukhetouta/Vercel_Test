import { Stack } from '@mui/material';

import { CustomProgressBar } from 'src/components/custom-progressbar';

export default function PlayProgresses() {
  return (
    <Stack gap={2}>
      <CustomProgressBar width="60%" title="Speed" percents={90} color="warning" />
      <CustomProgressBar width="60%" title="Shields" percents={20} color="error" />
      <CustomProgressBar width="60%" title="Endurance" percents={40} color="success" />
    </Stack>
  );
}

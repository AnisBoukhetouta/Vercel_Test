import { Stack, Typography } from '@mui/material';

import { CustomStepper } from 'src/components/custom-stepper';
import { ApexBasicChart } from 'src/components/custom-apex-chart';

export default function ChildActivity() {
  return (
    <Stack spacing={3}>
      <Typography variant="h5">Activity</Typography>
      <ApexBasicChart />
      <CustomStepper />
    </Stack>
  );
}

import { Box, Stack, Typography } from '@mui/material';

import { CustomStepper } from 'src/components/custom-stepper';

export default function ChildActivity() {
  return (
    <Stack spacing={3}>
      <Typography variant="h5">Activity</Typography>
      <Box
        component="div"
        height="173px"
        sx={{ textAlign: 'center', backgroundColor: '#D9D9D9' }}
      />
      <CustomStepper />
    </Stack>
  );
}

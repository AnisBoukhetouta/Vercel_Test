import React from 'react';

import { Paper, Stack, Typography } from '@mui/material';

import { useAuthContext } from 'src/auth/hooks';

import { CustomStepper } from 'src/components/custom-stepper';

import PlayProgresses from './play-progresses';
import PlayFeatureSorted from './play-feature-sorted';

export default function PlayRightPanel() {
  const { user } = useAuthContext();
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    setUserName(user?.displayName);
  }, [user]);

  return (
    <Paper
      elevation={3}
      sx={{
        width: 943,
        height: 426,
        p: 5,
      }}
    >
      <Stack direction="row" justifyContent="space-between" gap={2} height="100%">
        <Stack direction="column" justifyContent="space-between" width="60%">
          <Typography sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: 700 }}>
            {userName}
          </Typography>
          <PlayProgresses />
          <CustomStepper context />
        </Stack>
        <PlayFeatureSorted />
      </Stack>
    </Paper>
  );
}

import React from 'react';

import { Paper, Stack } from '@mui/material';

import { CustomStepper } from 'src/components/custom-stepper';

import PlayProgresses from './play-progresses';

export default function PlayRightPanel() {
  // const { user } = useAuthContext();
  // const [userName, setUserName] = React.useState('');

  // React.useEffect(() => {
  //   setUserName(user?.displayName);
  // }, [user]);

  return (
    <Paper
      elevation={3}
      sx={{
        m: 3,
        p: 3,
        zIndex: 1,
        width: 'min-content',
      }}
    >
      <Stack
        width="max-content"
        direction="column"
        justifyContent="space-between"
        gap={2}
        height="100%"
      >
        {/* <Stack direction="column" justifyContent="space-between"> */}
        {/* <Typography sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: 700 }}>
            {userName}
          </Typography> */}
        <PlayProgresses />
        <CustomStepper context />
        {/* </Stack> */}
        {/* <PlayFeatureSorted /> */}
      </Stack>
    </Paper>
  );
}

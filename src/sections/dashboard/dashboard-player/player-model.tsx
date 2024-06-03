'use clinet';

import React, { Suspense } from 'react';

import { Box } from '@mui/material';

import Loading from 'src/app/loading';
import { useAuthContext } from 'src/auth/hooks';
import { DEV_HOST_API } from 'src/config-global';
import { getCurrentCharacter } from 'src/api/dashboard';

import ModelViewer from 'src/components/model-viewer/model-viewer';

export default function PlayerModel() {
  const { user } = useAuthContext();
  const [characterUrl, setCharacterUrl] = React.useState<string>();

  React.useEffect(() => {
    const currentCharacter = async (uid: string) => {
      try {
        const result = await getCurrentCharacter(uid);
        setCharacterUrl(`${DEV_HOST_API}${result}`);
      } catch (e) {
        console.error(e);
      }
    };
    if (user?.uid) {
      currentCharacter(user?.uid);
    }
  }, [user]);

  return (
    <Box component="div" height="473px" sx={{ position: 'relative' }}>
      <Suspense fallback={<Loading sx={{ zIndex: 0 }} />}>
        {!characterUrl ? <Loading sx={{ zIndex: 0 }} /> : <ModelViewer src={characterUrl} />}
      </Suspense>
    </Box>
  );
}

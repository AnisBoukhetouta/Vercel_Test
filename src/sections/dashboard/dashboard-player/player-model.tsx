'use clinet';

import { Suspense } from 'react';

import { Box } from '@mui/material';

import Loading from 'src/app/loading';
import { useDashboardContext } from 'src/dashboard/hook/useDashboardContext';

import ModelViewer from 'src/components/model-viewer/model-viewer';

export default function PlayerModel() {
  const { characterId } = useDashboardContext();

  return (
    <Box component="div" height="473px" sx={{ position: 'relative' }}>
      <Suspense fallback={<Loading />}>
        <ModelViewer src={`/models/character${characterId + 1}.glb`} />
      </Suspense>
    </Box>
  );
}

'use clinet';

import { Suspense } from 'react';

import { Box } from '@mui/material';

import Loading from 'src/app/loading';
import { useDashboardContext } from 'src/dashboard/hook/useDashboardContext';

import ModelViewer from 'src/components/model-viewer/model-viewer';

import { useCheckoutContext } from 'src/sections/checkout/context';

export default function PlayerModel() {
  const { characterId } = useDashboardContext();
  const { glb } = useCheckoutContext();

  return (
    <Box component="div" height="473px" sx={{ position: 'relative' }}>
      <Suspense fallback={<Loading sx={{ zIndex: 10 }} />}>
        <ModelViewer src={glb ?? `/models/character${characterId + 1}.glb`} />
      </Suspense>
    </Box>
  );
}

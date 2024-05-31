'use client';

import { BoxProps } from '@mui/material';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export default function Loading({ sx, ...other }: BoxProps) {
  return <SplashScreen sx={sx} {...other} />;
}

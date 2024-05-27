'use client';

import { Box, alpha } from '@mui/material';

import DashboardListView from './dashboard-admin/dashboard-list-view';
import DashboardPlayView from './dashboard-admin/dashboard-play-view';

export default function DashboardView() {
  return (
    <Box
      component="div"
      sx={{
        m: 3,
        p: '14px',
        height: '85vh',
        overflow: 'scroll',
        scrollbarWidth: 'none',
        borderRadius: 2,
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
        border: (theme) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      <DashboardPlayView />
      <DashboardListView />
    </Box>
  );
}

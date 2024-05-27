'use client';

import { Box, alpha } from '@mui/material';

import AnalyticsWebsiteVisits from 'src/sections/overview/analytics/analytics-website-visits';

import DashboardListView from './dashboard-list-view';

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
      <Box component="div" sx={{ padding: '24px' }}>
        <AnalyticsWebsiteVisits
          title="Plays"
          subheader="(+43%) than last year"
          chart={{
            labels: [
              '01/01/2003',
              '02/01/2003',
              '03/01/2003',
              '04/01/2003',
              '05/01/2003',
              '06/01/2003',
              '07/01/2003',
              '08/01/2003',
              '09/01/2003',
              '10/01/2003',
              '11/01/2003',
            ],
            series: [
              {
                name: 'Team A',
                type: 'column',
                fill: 'solid',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
              },
              {
                name: 'Team B',
                type: 'area',
                fill: 'gradient',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
              },
              {
                name: 'Team C',
                type: 'line',
                fill: 'solid',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
              },
            ],
          }}
        />
      </Box>
      <DashboardListView />
    </Box>
  );
}

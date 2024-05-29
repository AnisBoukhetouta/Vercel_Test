import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import { ApexMultipleChart } from 'src/components/custom-apex-chart';

import ParentGrade from './parent-grade';
import ParentChildDetail from './parent-child-detail/parent-child-detail';

export default function ParentDashboard() {
  return (
    <Box component="div" sx={{ p: '24px' }}>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <ApexMultipleChart />
        </Grid>
        <Grid item xs={3}>
          <ParentGrade />
        </Grid>
        <Grid item xs={12}>
          <ParentChildDetail />
        </Grid>
        <Grid item xs={12}>
          <ParentChildDetail />
        </Grid>
      </Grid>
    </Box>
  );
}

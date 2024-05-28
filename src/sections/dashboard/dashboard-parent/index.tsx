import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { Fab, Grid, Stack, Alert, Avatar, Button, Typography } from '@mui/material';

import { _carouselBigCards } from 'src/_mock';

import { CustomStepper } from 'src/components/custom-stepper';
import CustomCarousel from 'src/components/custom-carousel/custom-carousel';

import AnalyticsWebsiteVisits from 'src/sections/overview/analytics/analytics-website-visits';

export default function ParentDashboard() {
  return (
    <Box component="div" sx={{ p: '24px' }}>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <Box
            component="div"
            height="473px"
            sx={{ textAlign: 'center', backgroundColor: '#D9D9D9' }}
          >
            ApexChart
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={3} justifyContent="center">
            <CustomCarousel
              height="300px"
              list={_carouselBigCards}
              sx={{ width: 1 }}
              header="NEW COURSE"
              buttonTitle="Add Course"
            />
            <CustomStepper />
            <Fab
              variant="extended"
              color="primary"
              aria-label="Upgrade"
              sx={{ width: '130px', mr: 'auto', ml: 'auto', fontSize: '20px' }}
            >
              Upgrade
            </Fab>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Stack spacing={3} alignItems="center" justifyContent="center" height="250px">
                <Avatar
                  alt="avatar"
                  sx={{ width: '80px', height: '80px' }}
                  src="https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg"
                />
                <Typography variant="h5">Jayvion Simon</Typography>
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="Upgrade"
                  sx={{ width: '100px', mr: 'auto', ml: 'auto', fontSize: '17px' }}
                >
                  Message
                </Fab>
                <Button startIcon={<AddIcon />}>Add Task</Button>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={3}>
                <Typography variant="h5">Activity</Typography>
                <Box
                  component="div"
                  height="173px"
                  sx={{ textAlign: 'center', backgroundColor: '#D9D9D9' }}
                />
                <CustomStepper />
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={3} sx={{ pt: 7 }}>
                <Alert severity="info" sx={{ width: '100%' }} onClose={() => {}}>
                  Mini-Course Added
                </Alert>
                <Alert severity="success" sx={{ width: '100%' }} onClose={() => {}}>
                  Chore Approved
                </Alert>
                <Alert severity="warning" sx={{ width: '100%' }} onClose={() => {}}>
                  Chore about to expire
                </Alert>
                <Alert severity="error" sx={{ width: '100%' }} onClose={() => {}}>
                  Chore Failed
                </Alert>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <AnalyticsWebsiteVisits
                height="300px"
                chart={{
                  labels: [
                    '01/Jan/2024',
                    '01/Feb/2024',
                    '01/Mar/2024',
                    '01/Apr/2024',
                    '01/May/2024',
                    '01/Jun/2024',
                    '01/Jul/2024',
                    '01/Aug/2024',
                    '01/Sep/2024',
                    '01/Oct/2024',
                    '01/Nov/2024',
                    '01/Dec/2024',
                  ],
                  series: [
                    {
                      name: 'Total',
                      type: 'column',
                      fill: 'solid',
                      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37],
                    },
                    {
                      name: 'Game A',
                      type: 'area',
                      fill: 'gradient',
                      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 21],
                    },
                    {
                      name: 'Game B',
                      type: 'line',
                      fill: 'solid',
                      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 64],
                    },
                  ],
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Stack spacing={3} alignItems="center" justifyContent="center" height="250px">
                <Avatar
                  alt="avatar"
                  sx={{ width: '80px', height: '80px' }}
                  src="https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg"
                />
                <Typography variant="h5">Jayvion Simon</Typography>
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="Upgrade"
                  sx={{ width: '100px', mr: 'auto', ml: 'auto', fontSize: '17px' }}
                >
                  Message
                </Fab>
                <Button startIcon={<AddIcon />}>Add Task</Button>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={3}>
                <Typography variant="h5">Activity</Typography>
                <Box
                  component="div"
                  height="173px"
                  sx={{ textAlign: 'center', backgroundColor: '#D9D9D9' }}
                />
                <CustomStepper />
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={3} sx={{ pt: 7 }}>
                <Alert severity="info" sx={{ width: '100%' }} onClose={() => {}}>
                  Mini-Course Added
                </Alert>
                <Alert severity="success" sx={{ width: '100%' }} onClose={() => {}}>
                  Chore Approved
                </Alert>
                <Alert severity="warning" sx={{ width: '100%' }} onClose={() => {}}>
                  Chore about to expire
                </Alert>
                <Alert severity="error" sx={{ width: '100%' }} onClose={() => {}}>
                  Chore Failed
                </Alert>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <AnalyticsWebsiteVisits
                height="300px"
                chart={{
                  labels: [
                    '01/Jan/2024',
                    '01/Feb/2024',
                    '01/Mar/2024',
                    '01/Apr/2024',
                    '01/May/2024',
                    '01/Jun/2024',
                    '01/Jul/2024',
                    '01/Aug/2024',
                    '01/Sep/2024',
                    '01/Oct/2024',
                    '01/Nov/2024',
                    '01/Dec/2024',
                  ],
                  series: [
                    {
                      name: 'Total',
                      type: 'column',
                      fill: 'solid',
                      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37],
                    },
                    {
                      name: 'Game A',
                      type: 'area',
                      fill: 'gradient',
                      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 21],
                    },
                    {
                      name: 'Game B',
                      type: 'line',
                      fill: 'solid',
                      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 64],
                    },
                  ],
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

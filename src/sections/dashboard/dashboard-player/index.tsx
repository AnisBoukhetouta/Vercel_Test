'use client';

import React, { Suspense } from 'react';

import { Box } from '@mui/system';
import { Fab, Grid, Alert, Stack, Typography } from '@mui/material';

import { useSearchParams } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import Loading from 'src/app/loading';
import { useGetMails } from 'src/api/mail';
import { CharacterType } from 'src/constants';
import { useDashboardContext } from 'src/dashboard/hook/useDashboardContext';

import { CustomStepper } from 'src/components/custom-stepper';
import ModelViewer from 'src/components/model-viewer/model-viewer';

import AnalyticsWebsiteVisits from 'src/sections/overview/analytics/analytics-website-visits';
import EcommerceWidgetSummary from 'src/sections/overview/e-commerce/ecommerce-widget-summary';

import CustomMailList from './CustomMailList';
import CustomBasicApexChart from './CustomApexBasicChart';
import CustomAnalyticsSubject from './CustomAnalyticsSubject';

export default function PlayerDashboard() {
  const openMail = useBoolean();
  const searchParams = useSearchParams();
  const selectedMailId = searchParams.get('id') || '';
  const selectedLabelId = searchParams.get('label') || 'inbox';
  const { mails, mailsLoading, mailsError, mailsEmpty } = useGetMails(selectedLabelId);
  const { characterId, setCharacterId } = useDashboardContext();

  const handleClickMail = React.useCallback((mailId: string) => {
    console.log('MailId: ', mailId);
  }, []);

  return (
    <Box component="div" sx={{ px: '24px' }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Box component="div" height="473px" sx={{ position: 'relative' }}>
            <Suspense fallback={<Loading />}>
              <ModelViewer src={`/models/character${characterId + 1}.glb`} />
            </Suspense>
          </Box>
          <Stack direction="row" justifyContent="center" spacing={5} sx={{ p: 3 }}>
            <Fab
              variant="extended"
              color="primary"
              aria-label="Skin"
              onClick={() => {
                setCharacterId(CharacterType.skin);
              }}
            >
              Skin
            </Fab>
            <Fab
              variant="extended"
              color="primary"
              aria-label="Skin"
              onClick={() => {
                setCharacterId(CharacterType.backBling);
              }}
            >
              Back Bling
            </Fab>
            <Fab
              variant="extended"
              color="primary"
              aria-label="Skin"
              onClick={() => {
                setCharacterId(CharacterType.glider);
              }}
            >
              Glider
            </Fab>
            <Fab
              variant="extended"
              color="primary"
              aria-label="Skin"
              onClick={() => {
                setCharacterId(CharacterType.icon);
              }}
            >
              Icon
            </Fab>
          </Stack>
          <CustomAnalyticsSubject
            title=""
            chart={{
              categories: ['Speed', 'Endurance', 'Extra', 'Chores', 'Mini-Courses', 'Shields'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
              ],
            }}
          />
          <CustomMailList
            mails={mails}
            loading={mailsLoading}
            //
            openMail={openMail.value}
            onCloseMail={openMail.onFalse}
            onClickMail={handleClickMail}
            //
            selectedLabelId={selectedLabelId}
            selectedMailId={selectedMailId}
          />
        </Grid>
        <Grid item xs={7}>
          <Stack spacing={10} sx={{ py: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Stack spacing={3}>
                  <Typography variant="h4">Player Nickname</Typography>
                  <EcommerceWidgetSummary
                    title="Speed"
                    percent={39.4}
                    total={31968}
                    chart={{
                      series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
                    }}
                  />
                  <EcommerceWidgetSummary
                    title="Shields"
                    percent={39.4}
                    total={31968}
                    chart={{
                      series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
                    }}
                  />
                  <EcommerceWidgetSummary
                    title="Endurance"
                    percent={39.4}
                    total={31968}
                    chart={{
                      series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
                    }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={3}>
                  <Typography variant="h4">Activity</Typography>
                  <CustomBasicApexChart />
                  <Stack spacing={3}>
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
                </Stack>
              </Grid>
            </Grid>
            <Stack spacing={3}>
              <Typography variant="h4">Level</Typography>
              <CustomStepper />
            </Stack>
            <Stack>
              <AnalyticsWebsiteVisits
                title="Daily Activity"
                subheader="(+43%) than last year"
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
                      name: 'Actual',
                      type: 'column',
                      fill: 'solid',
                      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37],
                    },
                    {
                      name: 'Goal',
                      type: 'area',
                      fill: 'gradient',
                      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 21],
                    },
                    {
                      name: 'Team Avg',
                      type: 'line',
                      fill: 'solid',
                      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 64],
                    },
                  ],
                }}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

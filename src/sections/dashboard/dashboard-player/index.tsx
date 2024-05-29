'use client';

import React from 'react';

import { Box } from '@mui/system';
import { Grid, Stack, Button, Typography } from '@mui/material';

import { useSearchParams } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { useGetMails } from 'src/api/mail';
import { AnalyticsChartsValue } from 'src/constants';
import { useDashboardContext } from 'src/dashboard/hook/useDashboardContext';

import { CustomStepper } from 'src/components/custom-stepper';

import AnalyticsWebsiteVisits from 'src/sections/overview/analytics/analytics-website-visits';

import PlayerModel from './player-model';
import CustomMailList from './CustomMailList';
import PlayerEchoData from './player-eco-data';
import PlayerAlertBox from './player-alert-box';
import PlayerApexChart from './player-apex-chart';
import PlayerController from './player-controller';
import CustomAnalyticsSubject from './CustomAnalyticsSubject';
import PlayerConfirmDialog from './player-confirm-dialog/player-confirm-dialog';
import PlayerConfirmContent from './player-confirm-dialog/player-confirm-content';

export default function PlayerDashboard() {
  const openMail = useBoolean();
  const { confirm } = useDashboardContext();
  const searchParams = useSearchParams();
  const selectedMailId = searchParams.get('id') || '';
  const selectedLabelId = searchParams.get('label') || 'inbox';
  const { mails, mailsLoading, mailsError, mailsEmpty } = useGetMails(selectedLabelId);

  const handleClickMail = React.useCallback((mailId: string) => {
    console.log('MailId: ', mailId);
  }, []);

  return (
    <Box component="div" sx={{ px: '24px' }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <PlayerModel />
          <PlayerController />
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
            openMail={openMail.value}
            onCloseMail={openMail.onFalse}
            onClickMail={handleClickMail}
            selectedLabelId={selectedLabelId}
            selectedMailId={selectedMailId}
          />
        </Grid>
        <Grid item xs={7}>
          <Stack spacing={10} sx={{ py: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <PlayerEchoData />
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={3}>
                  <Typography variant="h4">Activity</Typography>
                  <PlayerApexChart />
                  <PlayerAlertBox />
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
                chart={AnalyticsChartsValue}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <PlayerConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Skins"
        content={<PlayerConfirmContent />}
        action={
          <Button variant="contained" color="primary" onClick={() => {}}>
            Select
          </Button>
        }
      />
    </Box>
  );
}

'use client';

import { Stack, Typography } from '@mui/material';

import EcommerceWidgetSummary from 'src/sections/overview/e-commerce/ecommerce-widget-summary';

export default function PlayerEchoData() {
  return (
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
  );
}

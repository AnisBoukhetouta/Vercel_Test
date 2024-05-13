import React from 'react';
import { ApexOptions } from 'apexcharts';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';

import { useResponsive } from 'src/hooks/use-responsive';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  timer: number;
  chart: {
    colors?: string[][];
    series: {
      label: string;
      percent: number;
      total: string;
    }[];
    options?: ApexOptions;
  };
}

type Clock = {
  hour: string;
  minute: string;
  second: string;
};

export default function CustomTaskTimer({ chart, timer, ...other }: Props) {
  const [clock, setClock] = React.useState<Clock>();
  const [percentage, setPercentage] = React.useState<number>(0);
  const [interval, setInterval] = React.useState<number>(timer);

  const theme = useTheme();

  const smUp = useResponsive('up', 'sm');

  const {
    colors = [
      [theme.palette.primary.light, theme.palette.primary.main],
      [theme.palette.warning.light, theme.palette.warning.main],
    ],
    series,
    options,
  } = chart;

  const chartOptionsCheckIn = useChart({
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: colors[0][0], opacity: 1 },
          { offset: 100, color: colors[0][1], opacity: 1 },
        ],
      },
    },
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      padding: {
        top: -9,
        bottom: -9,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      radialBar: {
        hollow: { size: '64%' },
        track: { margin: 0 },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 6,
            fontSize: theme.typography.subtitle2.fontSize as string,
          },
        },
      },
    },
    ...options,
  });

  const chartOptionsCheckout = {
    ...chartOptionsCheckIn,
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: colors[1][0], opacity: 1 },
          { offset: 100, color: colors[1][1], opacity: 1 },
        ],
      },
    },
  };

  React.useEffect(() => {
    setInterval(timer);
  }, [timer]);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setInterval((prevInterval) => prevInterval + 1000);
    }, 1000);
    setPercentage(Math.floor(interval / 108000));
    setClock({
      hour: String(Math.floor(interval / 3600000)).padStart(2, '0'),
      minute: String(Math.floor((interval % 3600000) / 60000)).padStart(2, '0'),
      second: String(Math.floor(((interval % 3600000) % 60000) / 1000)).padStart(2, '0'),
    });
    if (interval >= 10800000) setInterval(timer);
    return () => clearTimeout(timerId);
  }, [interval]);

  return (
    <Card {...other}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={
          <Divider
            orientation={smUp ? 'vertical' : 'horizontal'}
            flexItem
            sx={{ borderStyle: 'dashed' }}
          />
        }
      >
        {series.map((item, index) => (
          <Stack
            key={item.label}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              py: 5,
              width: 1,
              px: { xs: 3, sm: 1 },
            }}
          >
            <Chart
              dir="ltr"
              type="radialBar"
              series={[percentage ?? item.percent]}
              options={index === 1 ? chartOptionsCheckout : chartOptionsCheckIn}
              width={106}
              height={106}
            />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ mb: 0.5 }}>
                {`${clock?.hour}h ${clock?.minute}m ${clock?.second}s`}
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.72 }}>
                {item.label}
              </Typography>
            </div>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}

'use client';

import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

function generateData(count: number, yrange: { min: number; max: number }) {
  const series = [];
  for (let i = 0; i < count; i += 1) {
    const x = (i + 1).toString();
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x,
      y,
    });
  }
  return series;
}

const charts = {
  series: [
    {
      name: 'Metric1',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric2',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric3',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric4',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric5',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric6',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric7',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric8',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric9',
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
  ],
  options: {
    chart: {
      height: 300,
      type: 'heatmap' as const,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#008FFB'],
    title: {
      text: '',
    },
  } as ApexOptions,
};

const PlayerApexChart: React.FC = () => (
  <Chart options={charts.options} series={charts.series} type="heatmap" width="100%" height={290} />
);
export default PlayerApexChart;

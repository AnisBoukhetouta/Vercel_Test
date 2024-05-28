'use client';

import React from 'react';
import ReactApexChart from 'react-apexcharts';

function generateData(count: any, yrange: any) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = (i + 1).toString();
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x,
      y,
    });
    // eslint-disable-next-line no-plusplus
    i++;
  }
  return series;
}

export default function CustomBasicApexChart() {
  return (
    <ReactApexChart
      options={charts.options}
      series={charts.series}
      type="heatmap"
      padding={0}
      margin={0}
      width="100%"
      height={290}
    />
  );
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
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#008FFB'],
    title: {
      text: '',
    },
  },
};

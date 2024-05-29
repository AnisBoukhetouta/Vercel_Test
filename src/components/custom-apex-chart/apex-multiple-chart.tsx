'use client';

import React from 'react';
import moment from 'moment';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

const ApexMultipleChart: React.FC = () => {
  const options: ApexCharts.ApexOptions = {
    series: [
      {
        name: 'Bob',
        data: [
          {
            x: 'Design',
            y: [new Date('2019-03-05').getTime(), new Date('2019-03-08').getTime()],
          },
          {
            x: 'Code',
            y: [new Date('2019-03-08').getTime(), new Date('2019-03-11').getTime()],
          },
          {
            x: 'Test',
            y: [new Date('2019-03-11').getTime(), new Date('2019-03-16').getTime()],
          },
        ],
      },
      {
        name: 'Joe',
        data: [
          {
            x: 'Design',
            y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()],
          },
          {
            x: 'Code',
            y: [new Date('2019-03-06').getTime(), new Date('2019-03-09').getTime()],
          },
          {
            x: 'Test',
            y: [new Date('2019-03-10').getTime(), new Date('2019-03-19').getTime()],
          },
        ],
      },
    ],
    chart: {
      height: 350,
      type: 'rangeBar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter(val: [number, number]): string {
        const a = moment(val[0]);
        const b = moment(val[1]);
        const diff = b.diff(a, 'days');
        return diff + (diff > 1 ? ' days' : ' day');
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100],
      },
    },
    xaxis: {
      type: 'datetime',
    },
    legend: {
      position: 'top',
    },
  };

  return <Chart options={options} series={options.series} type="rangeBar" height={450} />;
};

export default ApexMultipleChart;

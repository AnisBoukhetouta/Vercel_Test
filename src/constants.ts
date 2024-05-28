export enum GameType {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
}

export const GameTypeConverter = [
  'Main',
  'Speed Mini-Game',
  'Shield Mini-Game',
  'Endurance Mini-Game',
  'Course',
  'Other Mini-Game',
];

export enum CharacterType {
  skin,
  backBling,
  glider,
  icon,
}

export const AnalyticsChartsValue = {
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
};

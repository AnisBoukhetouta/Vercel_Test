import dynamic from 'next/dynamic';

const PlayerApexChart = dynamic(() => import('./player-apex-chart'), { ssr: false });

export default PlayerApexChart;

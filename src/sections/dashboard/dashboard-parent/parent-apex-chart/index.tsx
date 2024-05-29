import dynamic from 'next/dynamic';

const ParentApexChart = dynamic(() => import('./parent-apex-chart'), { ssr: false });

export default ParentApexChart;
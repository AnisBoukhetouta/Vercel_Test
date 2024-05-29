import dynamic from 'next/dynamic';

export const ApexBasicChart = dynamic(() => import('./apex-basic-chart'), { ssr: false });
export const ApexMultipleChart = dynamic(() => import('./apex-multiple-chart'), { ssr: false });


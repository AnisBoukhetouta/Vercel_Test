import DashboardProvider from 'src/dashboard/context/dashboard-provider';

import { DashboardView } from 'src/sections/dashboard/view';

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <DashboardProvider>
      <DashboardView />
    </DashboardProvider>
  );
}

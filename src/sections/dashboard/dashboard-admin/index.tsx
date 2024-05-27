'use client';

import DashboardListView from './dashboard-list-view';
import DashboardPlayView from './dashboard-play-view';

export default function AdminDashboard() {
  return (
    <>
      <DashboardPlayView />
      <DashboardListView />
    </>
  );
}

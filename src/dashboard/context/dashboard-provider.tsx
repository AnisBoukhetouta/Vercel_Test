'use client';

import React from 'react';

import { DashboardContext } from './dashboard-context';

type Props = {
  children: React.ReactNode;
};

export default function DashboardProvider({ children }: Props) {
  const [role, setRole] = React.useState<string>('Admin');

  const memoContext = React.useMemo(() => ({ role, setRole }), [role]);

  return <DashboardContext.Provider value={memoContext}>{children}</DashboardContext.Provider>;
}

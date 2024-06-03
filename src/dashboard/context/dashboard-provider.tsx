'use client';

import React from 'react';

import { useBoolean } from 'src/hooks/use-boolean';

import { DashboardContext } from './dashboard-context';

type Props = {
  children: React.ReactNode;
};

export default function DashboardProvider({ children }: Props) {
  const [role, setRole] = React.useState<string>('Player');
  const confirm = useBoolean();

  const memoContext = React.useMemo(() => ({ role, confirm, setRole }), [role, confirm]);

  return <DashboardContext.Provider value={memoContext}>{children}</DashboardContext.Provider>;
}

'use client';

import React from 'react';

import { useBoolean } from 'src/hooks/use-boolean';

import { DashboardContext } from './dashboard-context';

type Props = {
  children: React.ReactNode;
};

export default function DashboardProvider({ children }: Props) {
  const [role, setRole] = React.useState<string>('Admin');
  const [characterId, setCharacterId] = React.useState<number>(0);
  const confirm = useBoolean();

  const memoContext = React.useMemo(
    () => ({ role, characterId, confirm, setRole, setCharacterId }),
    [role, characterId, confirm]
  );

  return <DashboardContext.Provider value={memoContext}>{children}</DashboardContext.Provider>;
}

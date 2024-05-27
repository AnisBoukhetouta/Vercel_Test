'use client';

import { useContext } from 'react';

import { DashboardContext } from '../context/dashboard-context';

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) throw new Error('useDashboardContext must be use inside DashboardContextProvider');

  return context;
};

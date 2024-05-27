'use client';

import React from 'react';

import { Box, alpha } from '@mui/material';

import { useDashboardContext } from 'src/dashboard/hook/useDashboardContext';

import AdminDashboard from '../dashboard-admin';
import ParentDashboard from '../dashboard-parent';
import PlayerDashboard from '../dashboard-player';
import TeacherDashboard from '../dashboard-teacher';
import DashboardRoleRadioGroup from '../dashboard-role-radio-group';

export default function DashboardView() {
  const { role } = useDashboardContext();

  const DashboardContent = React.useCallback(() => {
    switch (role) {
      case 'Player':
        return <PlayerDashboard />;
      case 'Parent':
        return <ParentDashboard />;
      case 'Teacher':
        return <TeacherDashboard />;
      case 'Admin':
        return <AdminDashboard />;
      default:
        return <AdminDashboard />;
    }
  }, [role]);

  return (
    <Box
      component="div"
      sx={{
        m: 3,
        p: '14px',
        height: '85vh',
        overflow: 'scroll',
        scrollbarWidth: 'none',
        borderRadius: 2,
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
        border: (theme) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      <DashboardRoleRadioGroup />
      <DashboardContent />
    </Box>
  );
}

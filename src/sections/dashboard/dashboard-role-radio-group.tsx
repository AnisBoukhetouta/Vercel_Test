'use client';

import React from 'react';

import { Box } from '@mui/system';
import { Radio, RadioGroup, Typography, FormControlLabel } from '@mui/material';

import { useDashboardContext } from 'src/dashboard/hook/useDashboardContext';

export default function DashboardRoleRadioGroup() {
  const { role, setRole } = useDashboardContext();
  return (
    <Box component="div" sx={{ px: '24px' }}>
      <RadioGroup
        row
        value={role}
        onChange={(e) => setRole(e.target.value)}
        sx={{ alignItems: 'center', justifyContent: 'center', gap: '5%' }}
      >
        <Typography
          width="80px"
          sx={{ fontSize: '12px', lineHeight: '18px', fontWeight: 700, color: '#919EAB' }}
        >
          Mode
        </Typography>
        <FormControlLabel value="Player" control={<Radio size="medium" />} label="Player" />
        <FormControlLabel value="Parent" control={<Radio size="medium" />} label="Parent" />
        <FormControlLabel value="Teacher" control={<Radio size="medium" />} label="Teacher" />
        <FormControlLabel value="Admin" control={<Radio size="medium" />} label="Admin" />
      </RadioGroup>
    </Box>
  );
}

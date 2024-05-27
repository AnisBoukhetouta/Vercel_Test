'use client';

import { Box } from '@mui/system';
import { Radio, RadioGroup, Typography, FormControlLabel } from '@mui/material';

export default function DashboardRoleRadioGroup() {
  return (
    <Box component="div" sx={{ px: '24px' }}>
      <RadioGroup
        row
        defaultValue="Admin"
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

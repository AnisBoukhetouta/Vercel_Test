import { Stack, Typography, LinearProgress } from '@mui/material';

import { CustomButton } from '../custom-button';

interface Props {
  title: string;
  percents: number;
  color: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export default function CustomProgressBar({ title, percents, color }: Props) {
  return (
    <Stack direction="row" alignItems="center">
      <Stack direction="column" gap={1} sx={{ width: '60%' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography sx={{ fontSize: 12 }}>{title.toUpperCase()}</Typography>
          <Typography sx={{ fontSize: 12 }}>{`${percents} %`}</Typography>
        </Stack>
        <LinearProgress sx={{ height: 8 }} color={color} variant="determinate" value={percents} />
      </Stack>
      <div style={{ flexGrow: 1 }} />
      <CustomButton title={`Build ${title}`} width="35%" height={45} padding="0 30px" />
    </Stack>
  );
}

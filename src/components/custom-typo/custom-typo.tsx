import { Typography } from '@mui/material';

interface Props {
  title: string;
}

export function NormalTypography({ title }: Props) {
  return (
    <Typography sx={{ fontSize: '14px', lineHeight: '22px', fontWeight: 600 }}>{title}</Typography>
  );
}

export function HeaderTypography({ title }: Props) {
  return (
    <Typography sx={{ fontSize: '32px', lineHeight: '48px', fontWeight: 700 }}>{title}</Typography>
  );
}

export function SmallTypography({ title }: Props) {
  return (
    <Typography
      width="140px"
      sx={{ fontSize: '12px', lineHeight: '18px', fontWeight: 700, color: '#919EAB' }}
    >
      {title}
    </Typography>
  );
}

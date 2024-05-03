import { Typography } from '@mui/material';

interface Props {
  title: string;
}

export function NormalTypography({ title }: Props) {
  return <Typography sx={{ fontSize: '15px', lineHeight: '22px' }}>{title}</Typography>;
}

export function HeaderTypography({ title }: Props) {
  return (
    <Typography sx={{ fontSize: '33px', lineHeight: '48px', fontWeight: 700 }}>{title}</Typography>
  );
}

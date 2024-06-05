import { Stack, Typography } from '@mui/material';

interface Props {
  title: string;
}

export function NormalTypography({ title }: Props) {
  return (
    <Typography sx={{ fontSize: '14px', lineHeight: '22px', fontWeight: 600 }}>{title}</Typography>
  );
}

export function HeaderTypography({ title }: Props) {
  const long = title.length > 17;
  return (
    <Typography
      sx={{
        fontSize: '32px',
        lineHeight: long ? '30px' : '45px',
        fontWeight: 700,
        textAlign: 'center',
      }}
    >
      {title}
    </Typography>
  );
}

export function SmallTypography({ title }: Props) {
  return (
    <Stack height="30px" direction="row" alignItems="center">
      <Typography sx={{ fontSize: '12px', lineHeight: '18px', fontWeight: 700, color: '#919EAB' }}>
        {title}
      </Typography>
    </Stack>
  );
}

export function SmallRequiredTypography({ title }: Props) {
  return (
    <Stack height="30px" direction="row" alignItems="baseline">
      <Typography sx={{ fontSize: '12px', lineHeight: '18px', fontWeight: 700, color: '#919EAB' }}>
        {title}
      </Typography>
      <Typography variant="h6" color="error">
        *
      </Typography>
    </Stack>
  );
}

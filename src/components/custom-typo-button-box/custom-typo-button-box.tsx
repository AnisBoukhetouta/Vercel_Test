import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
}

export default function CustomTypoButtonBox({ title, sx, ...other }: Props) {
  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Stack spacing={2}>
        <Typography variant="h4">{title}</Typography>

        <Stack direction="row" spacing={1.5}>
          <Button fullWidth variant="contained" color="warning">
            Request
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}

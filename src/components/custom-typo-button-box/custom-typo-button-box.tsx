import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  buttonTitle: string;
  onClick?: () => void;
}

export default function CustomTypoButtonBox({ title, buttonTitle, onClick, sx, ...other }: Props) {
  const handleClick = () => {
    // axios.post(URL, data, {params: {token: token}})
    console.log('Request was sent!');
  };

  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Stack spacing={2}>
        <Typography variant="h4">{title}</Typography>

        <Stack direction="row" spacing={1.5}>
          <Button fullWidth variant="contained" color="warning" onClick={onClick ?? handleClick}>
            {buttonTitle}
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}

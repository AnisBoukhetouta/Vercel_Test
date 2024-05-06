import { Button } from '@mui/material';

interface Props {
  title: string;
  width?: string | number;
  fullWidth?: boolean;
  height?: string | number;
  padding?: string | number;
  margin?: string | number;
  backgroundColor?: string;
}

export default function CustomButton({
  title,
  padding,
  margin,
  width,
  height,
  fullWidth,
  backgroundColor,
}: Props) {
  return (
    <Button
      fullWidth={fullWidth}
      sx={{ width, height, margin, padding, backgroundColor: backgroundColor ?? 'gold' }}
    >
      {title}
    </Button>
  );
}

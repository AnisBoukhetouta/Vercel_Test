import { Button } from '@mui/material';

import { useGameContext } from 'src/game/hook/use-game-context';

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
  const { setPlay } = useGameContext();
  return (
    <Button
      onClick={() => setPlay(true)}
      fullWidth={fullWidth}
      sx={{ width, height, margin, padding, backgroundColor: backgroundColor ?? 'gold' }}
    >
      {title}
    </Button>
  );
}

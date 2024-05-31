import { LoadingIcon } from 'yet-another-react-lightbox';

import { Check } from '@mui/icons-material';

interface Props {
  checking: boolean;
  checked: boolean;
  error: boolean;
}

export default function CustomCheckButton({ checking, checked, error }: Props) {
  if (checking) {
    return <LoadingIcon />;
  }

  let color:
    | 'primary'
    | 'warning'
    | 'error'
    | 'disabled'
    | 'action'
    | 'inherit'
    | 'secondary'
    | 'success'
    | 'info' = 'disabled';
  if (checked) {
    color = 'primary';
  } else if (error) {
    color = 'error';
  }

  return <Check color={color} />;
}

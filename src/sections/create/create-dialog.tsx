import React from 'react';
import { useFormikContext } from 'formik';

import { Stack } from '@mui/system';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Loading from 'src/app/loading';

// ----------------------------------------------------------------------

export default function AlertDialog() {
  const { isSubmitting, setSubmitting } = useFormikContext();
  const [view, setView] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      setView(true);
    } else {
      setTimeout(() => {
        setView(false);
      }, 3000);
    }
  }, [isSubmitting]);

  return (
    <Dialog open={view}>
      <DialogTitle>{`Use Google's location service?`}</DialogTitle>

      <DialogContent>
        <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
          The game is currently being uploaded...
        </Typography>

        <Stack
          sx={{
            color: 'text.secondary',
            p: 5,
            position: 'relative',
            width: '300px',
            height: '230px',
          }}
        >
          <Loading />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          disabled={!isSubmitting}
          onClick={() => setSubmitting(false)}
          autoFocus
        >
          Stop
        </Button>
      </DialogActions>
    </Dialog>
  );
}

import { Alert, Stack } from '@mui/material';

export default function ChildAlert() {
  return (
    <Stack spacing={4} sx={{ pt: 7 }}>
      <Alert severity="info" sx={{ width: '100%' }} onClose={() => {}}>
        Mini-Course Added
      </Alert>
      <Alert severity="success" sx={{ width: '100%' }} onClose={() => {}}>
        Chore Approved
      </Alert>
      <Alert severity="warning" sx={{ width: '100%' }} onClose={() => {}}>
        Chore about to expire
      </Alert>
      <Alert severity="error" sx={{ width: '100%' }} onClose={() => {}}>
        Chore Failed
      </Alert>
    </Stack>
  );
}

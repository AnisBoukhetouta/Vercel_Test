import AddIcon from '@mui/icons-material/Add';
import { Fab, Stack, Avatar, Button, Typography } from '@mui/material';

export default function ChildController() {
  return (
    <Stack spacing={3} alignItems="center" justifyContent="center" height="250px">
      <Avatar
        alt="avatar"
        sx={{ width: '80px', height: '80px' }}
        src="https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg"
      />
      <Typography variant="h5">Jayvion Simon</Typography>
      <Fab
        variant="extended"
        color="primary"
        aria-label="Upgrade"
        sx={{ width: '100px', mr: 'auto', ml: 'auto', fontSize: '17px' }}
      >
        Message
      </Fab>
      <Button startIcon={<AddIcon />}>Add Task</Button>
    </Stack>
  );
}

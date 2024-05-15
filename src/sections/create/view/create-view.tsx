import { Stack } from '@mui/material';
import CreateType from '../create-type';
import CreateDetails from '../create-details';
import CreateOptions from '../create-options';
import CreateImage from '../create-image';
import CreatePreview from '../create-preview';
import CreateRewardGlb from '../create-reward-glb';
import CreateGameFile from '../create-game-file';

export default function CreateView() {
  return (
    <Stack>
      <CreateType />
      <CreateDetails />
      <CreateOptions />
      <CreateImage />
      <CreatePreview />
      <CreateRewardGlb />
      <CreateGameFile />
    </Stack>
  );
}

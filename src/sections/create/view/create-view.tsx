import { Stack } from '@mui/material';

import CreateType from '../create-type';
import CreateImage from '../create-image';
import CreateDetails from '../create-details';
import CreateOptions from '../create-options';
import CreatePreview from '../create-preview';
import CreateGameFile from '../create-game-file';
import CreateRewardGlb from '../create-reward-glb';

export default function CreateView() {
  return (
    <Stack gap={5}>
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

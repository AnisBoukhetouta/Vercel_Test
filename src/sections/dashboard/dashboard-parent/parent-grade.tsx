import { Fab, Stack } from '@mui/material';

import { _carouselBigCards } from 'src/_mock';

import { CustomStepper } from 'src/components/custom-stepper';
import CustomCarousel from 'src/components/custom-carousel/custom-carousel';

export default function ParentGrade() {
  return (
    <Stack spacing={3} justifyContent="center">
      <CustomCarousel
        height="300px"
        list={_carouselBigCards}
        sx={{ width: 1 }}
        header="NEW COURSE"
        buttonTitle="Add Course"
      />
      <CustomStepper />
      <Fab
        variant="extended"
        color="primary"
        aria-label="Upgrade"
        sx={{ width: '130px', mr: 'auto', ml: 'auto', fontSize: '20px' }}
      >
        Upgrade
      </Fab>
    </Stack>
  );
}

import { useState } from 'react';

import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import { alpha } from '@mui/material/styles';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import StepContent from '@mui/material/StepContent';

// ----------------------------------------------------------------------

const steps = [
  {
    label: 'Step 1',
    description: `Nam at tortor in tellus interdum sagittis. Nuncegestas, augue at pellentesque laoreet, felis eros vehicula leo.`,
  },
  {
    label: 'Step 2',
    description: `Nam at tortor in tellus interdum sagittis. Nuncegestas, augue at pellentesque laoreet, felis eros vehicula leo.`,
  },
  {
    label: 'Step 3',
    description: `Nam at tortor in tellus interdum sagittis. Nuncegestas, augue at pellentesque laoreet, felis eros vehicula leo.`,
  },
];

export default function CustomVerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box component="div" sx={{ mt: 3 }}>
                <Button variant="contained" onClick={handleNext}>
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button disabled={index === 0} onClick={handleBack}>
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper
          sx={{
            p: 3,
            mt: 3,
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
          }}
        >
          <Typography sx={{ mb: 2 }}>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset}>Reset</Button>
        </Paper>
      )}
    </>
  );
}

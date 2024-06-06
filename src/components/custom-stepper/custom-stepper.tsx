import { styled } from '@mui/material/styles';
import {
  Step,
  Stepper,
  StepLabel,
  StepConnector,
  StepIconProps,
  stepConnectorClasses,
} from '@mui/material';

import { bgGradient } from 'src/theme/css';

import Iconify from '../iconify';
import CustomButton from '../custom-button/custom-button';

//----------------------------------------------------------------

const STEPS = ['Level 1', 'Level 2', 'Level 3','Level 4','Level 5'];

type Prop = {
  context?: boolean;
};

export default function CustomStepper({ context }: Prop) {
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        ...bgGradient({
          startColor: theme.palette.success.light,
          endColor: theme.palette.success.main,
        }),
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        ...bgGradient({
          startColor: theme.palette.success.light,
          endColor: theme.palette.success.main,
        }),
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      borderRadius: 1,
      backgroundColor: theme.palette.divider,
    },
  }));

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Stepper
        sx={{ width: context ? '60%' : 1 }}
        alternativeLabel
        activeStep={1}
        connector={<ColorlibConnector />}
      >
        {STEPS.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {context && <CustomButton title="Complete Tasks" width="35%" height={45} padding="0 30px" />}
    </div>
  );
}

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  zIndex: 1,
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
  ...(ownerState.active && {
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    color: theme.palette.common.white,
    ...bgGradient({
      startColor: theme.palette.success.light,
      endColor: theme.palette.success.main,
    }),
  }),
  ...(ownerState.completed && {
    color: theme.palette.common.white,
    ...bgGradient({
      startColor: theme.palette.success.light,
      endColor: theme.palette.success.main,
    }),
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className, icon } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <Iconify icon="eva:settings-2-outline" width={24} />,
    2: <Iconify icon="eva:person-add-outline" width={24} />,
    3: <Iconify icon="eva:monitor-outline" width={24} />,
    4: <Iconify icon="eva:monitor-outline" width={24} />,
    5: <Iconify icon="eva:monitor-outline" width={24} />
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

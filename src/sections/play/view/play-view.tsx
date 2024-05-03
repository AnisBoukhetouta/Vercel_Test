'use client';

import { useScroll } from 'framer-motion';

import { Stack } from '@mui/system';
import { Box, Paper, alpha, Typography } from '@mui/material';

import MainLayout from 'src/layouts/main';

import ScrollProgress from 'src/components/scroll-progress';
import { CustomButton } from 'src/components/custom-button';
import { CustomStepper } from 'src/components/custom-stepper';
import ModelViewer from 'src/components/model-viewer/model-viewer';

import PlayProgresses from '../play-progresses';

export default function PlayView() {
  const { scrollYProgress } = useScroll();
  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <Box sx={{ pt: { xs: 8, md: 10 }, px: 5, width: '100%', height: '100vh' }}>
        <Box
          sx={{
            mt: 5,
            position: 'relative',
            width: '100%',
            height: '85vh',
            borderRadius: 2,
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
            border: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          <ModelViewer src='' />
          <Paper
            elevation={3}
            sx={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              width: 400,
              height: 250,
              p: 5,
              left: 50,
              bottom: 50,
            }}
          >
            <div style={{ flexGrow: 1 }} />
            <Typography sx={{ fontSize: '15px', lineHeight: '22px' }}>Current Game</Typography>
            <div style={{ flexGrow: 1 }} />
            <Typography sx={{ fontSize: '33px', lineHeight: '48px', fontWeight: 700 }}>
              Capture the Flag
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <CustomButton title="Play" fullWidth />
            <div style={{ flexGrow: 1 }} />
          </Paper>
          <Paper
            elevation={3}
            sx={{
              position: 'absolute',
              width: { lg: '55%', xl: 950 },
              height: 435,
              p: 5,
              right: 25,
              bottom: 25,
            }}
          >
            <Stack direction="column" justifyContent="space-between" height="100%">
              <Typography sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: 700 }}>
                [Username]
              </Typography>
              <PlayProgresses />
              <CustomStepper />
            </Stack>
          </Paper>
        </Box>
      </Box>
    </MainLayout>
  );
}

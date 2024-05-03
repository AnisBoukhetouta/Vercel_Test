'use client';

import React from 'react';
import { useScroll } from 'framer-motion';

import { Stack } from '@mui/system';
import { Box, Paper, alpha, Typography } from '@mui/material';

import MainLayout from 'src/layouts/main';

import ScrollProgress from 'src/components/scroll-progress';
import { CustomButton } from 'src/components/custom-button';
import { CustomStepper } from 'src/components/custom-stepper';
import ModelViewer from 'src/components/model-viewer/model-viewer';
import { HeaderTypography, NormalTypography } from 'src/components/custom-typo/cystom-typo';

import PlayProgresses from '../play-progresses';

export default function PlayView() {
  const [index, setIndex] = React.useState<number>(0);
  const { scrollYProgress } = useScroll();

  const handleWheel = React.useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const { deltaY } = e;
    if (deltaY > 0) {
      setIndex((x) => (x > 0 ? x - 1 : 0));
    } else if (deltaY < 0) {
      setIndex((x) => (x < 8 ? x + 1 : 8));
    }
  }, []);

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <Box
        onWheel={handleWheel}
        component="div"
        sx={{ pt: { xs: 8, md: 10 }, px: 5, width: '100%', height: '100vh' }}
      >
        <Box
          component="div"
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
          <ModelViewer src="" />
          <div
            style={{
              width: '100%',
              display: 'flex',
              position: 'absolute',
              bottom: index > 3 ? 25 : '-80vh',
              transition: 'all 1s',
              alignItems: 'end',
              justifyContent: 'space-around',
            }}
          >
            <Paper
              elevation={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 400,
                height: 250,
                p: 5,
              }}
            >
              <div style={{ flexGrow: 1 }} />
              <NormalTypography title="Current Game" />
              <div style={{ flexGrow: 1 }} />
              <HeaderTypography title="Capture the Flag" />
              <div style={{ flexGrow: 1 }} />
              <CustomButton title="Play" fullWidth />
              <div style={{ flexGrow: 1 }} />
            </Paper>
            <Paper
              elevation={3}
              sx={{
                width: { lg: '55%', xl: 950 },
                height: 435,
                p: 5,
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
          </div>
        </Box>
      </Box>
    </MainLayout>
  );
}

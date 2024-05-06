'use client';

import React from 'react';
import { useScroll } from 'framer-motion';

import { Stack } from '@mui/system';
import { Box, Paper, alpha, Typography } from '@mui/material';

import MainLayout from 'src/layouts/main';
// import { useGetGames } from 'src/api/games';

import { GameContext } from 'src/game/context/game-context';
import { _carouselBigCards, _carouselSmallCards } from 'src/_mock';

import ScrollProgress from 'src/components/scroll-progress';
import { CustomButton } from 'src/components/custom-button';
import { CustomStepper } from 'src/components/custom-stepper';
import ModelViewer from 'src/components/model-viewer/model-viewer';
import { HeaderTypography, NormalTypography } from 'src/components/custom-typo/custom-typo';

import PlayCarousel from '../play-carousel';
import PlayProgresses from '../play-progresses';
import PlayFeatureSorted from '../play-feature-sorted';

export default function PlayView() {
  const [gameTitle, setGameTitle] = React.useState<string>('');
  const [index, setIndex] = React.useState<number>(0);
  const { scrollYProgress } = useScroll();
  // const results = useGetGames();

  const handleWheel = React.useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const { deltaY } = e;
    if (deltaY > 0) {
      setIndex((x) => (x > 0 ? x - 1 : 0));
    } else if (deltaY < 0) {
      setIndex((x) => (x < 8 ? x + 1 : 8));
    }
  }, []);

  // React.useEffect(() => {
  //   console.log('~~~~~~~~~~~~', results);
  // }, [results]);

  const memoContext = React.useMemo(() => ({ gameTitle, setGameTitle }), [gameTitle]);

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
          <PlayCarousel
            height="250px"
            list={_carouselBigCards}
            sx={{ position: 'absolute', width: 330, height: 250, top: 0 }}
            header="NEW COURSE"
            buttonTitle="Add Course"
          />
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
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <PlayCarousel
                height="167px"
                list={_carouselSmallCards}
                sx={{ width: 344, height: 167, mb: 5 }}
                header="MULTIPLAYER"
                buttonTitle="Play Now"
              />
              <Paper
                elevation={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 344,
                  height: 176,
                  borderRadius: '16px',
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
            </div>
            <Paper
              elevation={3}
              sx={{
                width: 943,
                height: 426,
                p: 5,
              }}
            >
              <Stack direction="row" justifyContent="space-between" gap={2} height="100%">
                <Stack direction="column" justifyContent="space-between" width="60%">
                  <Typography sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: 700 }}>
                    [Username]
                  </Typography>
                  <PlayProgresses />
                  <CustomStepper />
                </Stack>
                <GameContext.Provider value={memoContext}>
                  <PlayFeatureSorted />
                </GameContext.Provider>
                {/* <PlayFeatureBottom /> */}
              </Stack>
            </Paper>
          </div>
        </Box>
      </Box>
    </MainLayout>
  );
}

'use client';

import React from 'react';
import { useScroll } from 'framer-motion';

import { Box, Stack, alpha } from '@mui/material';

import MainLayout from 'src/layouts/main';
// import { useGetGames } from 'src/api/games';

import { _carouselBigCards } from 'src/_mock';
import { GameContext } from 'src/game/context/game-context';

import ScrollProgress from 'src/components/scroll-progress';
import ModelViewer from 'src/components/model-viewer/model-viewer';

import PlayItem from '../play-item';

import PlayLeftPanel from '../play-left-panel';
import PlayRightPanel from '../play-right-panel';
import CustomCarousel from '../../../components/custom-carousel/custom-carousel';

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

  const memoContext = React.useMemo(() => ({ gameTitle, setGameTitle, setIndex }), [gameTitle]);

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
          {/* <ModelViewer src="" />
          <CustomCarousel
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
            <PlayLeftPanel />
            <GameContext.Provider value={memoContext}>
              <PlayRightPanel />
            </GameContext.Provider>
            <PlayFeatureBottom />
          </div> */}
          <Stack>
            <PlayItem />
          </Stack>
        </Box>
      </Box>
    </MainLayout>
  );
}

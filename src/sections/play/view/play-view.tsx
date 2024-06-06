'use client';

import React, { Suspense } from 'react';
import { useScroll } from 'framer-motion';

import { Box, Stack, alpha } from '@mui/material';

import Loading from 'src/app/loading';
import MainLayout from 'src/layouts/main';
import { useGetGames } from 'src/api/games';
import { useAuthContext } from 'src/auth/hooks';
import { DEV_HOST_API } from 'src/config-global';
import { getCurrentCharacter } from 'src/api/dashboard';
import { GameContext } from 'src/game/context/game-context';

import { SpaceTravel } from 'src/components/space-travel';
import ScrollProgress from 'src/components/scroll-progress';
import ModelViewer from 'src/components/model-viewer/model-viewer';

import PlayLeftPanel from '../play-left-panel';
import PlayGamePanel from '../play-game-panel';
import PlayRightPanel from '../play-right-panel';
import PlayFeatureBottom from '../play-feature-bottom-panel';

export default function PlayView() {
  const { data } = useGetGames();
  const [play, setPlay] = React.useState<boolean>(false);
  const [view, setView] = React.useState<boolean>(true);
  const [gameTitle, setGameTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [characterUrl, setCharacterUrl] = React.useState<string>();
  const [index, setIndex] = React.useState<number>(0);
  const { scrollYProgress } = useScroll();
  const { user } = useAuthContext();

  React.useEffect(() => {
    const currentCharacter = async (uid: string) => {
      try {
        const result = await getCurrentCharacter(uid);
        setCharacterUrl(`${DEV_HOST_API}${result}`);
      } catch (e) {
        console.error(e);
      }
    };
    if (user?.uid) {
      currentCharacter(user?.uid);
    }
  }, [user]);

  React.useEffect(() => {
    setTimeout(() => {
      setView(!!characterUrl);
    }, 3000);
  }, [characterUrl]);

  const memoContext = React.useMemo(
    () => ({ data, gameTitle, description, setDescription, setGameTitle, setIndex, setPlay }),
    [data, gameTitle, description]
  );

  const renderContent = () => {
    if (characterUrl) {
      return <ModelViewer src={characterUrl} />;
    }
    if (view) {
      return <Loading sx={{ zIndex: 0 }} />;
    }
    return <ModelViewer src="/models/character.glb" />;
  };

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <Box component="div" sx={{ pt: 4, px: 5, width: '100%', height: '100vh' }}>
        <Box
          component="div"
          sx={{
            mt: 5,
            // p: '14px',
            position: 'relative',
            width: '100%',
            height: '90vh',
            borderRadius: 2,
            overflow: 'auto',
            scrollbarWidth: 'none',
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
            border: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          <GameContext.Provider value={memoContext}>
            {play && gameTitle ? (
              <PlayGamePanel />
            ) : (
              <>
                <Box component="div" style={{ position: 'sticky', top: 0, height: '100%' }}>
                  <SpaceTravel />
                  <Suspense fallback={<Loading sx={{ zIndex: -10 }} />}>{renderContent()}</Suspense>
                  <Stack width={1} alignItems="end" style={{ top: 30 }}>
                    <PlayRightPanel />
                  </Stack>
                </Box>
                {/* <CustomCarousel
                  height="250px"
                  list={_carouselBigCards}
                  sx={{ position: 'absolute', width: 330, height: 250, top: 15 }}
                  header="NEW COURSE"
                  buttonTitle="Add Course"
                /> */}
                <Stack sx={{ position: 'absolute', top: 'calc(100vh - 325px)' }}>
                  <PlayLeftPanel />
                </Stack>
                <PlayFeatureBottom />
              </>
            )}
          </GameContext.Provider>
        </Box>
      </Box>
    </MainLayout>
  );
}

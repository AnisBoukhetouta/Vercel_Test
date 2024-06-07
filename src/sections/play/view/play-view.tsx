'use client';

import React, { Suspense } from 'react';
import { useScroll } from 'framer-motion';
import { Unity, useUnityContext } from 'react-unity-webgl';

import { Box, Stack } from '@mui/material';

import Loading from 'src/app/loading';
import MainLayout from 'src/layouts/main';
import { useGetGames } from 'src/api/games';
import { getCurrentCharacter } from 'src/api/dashboard';
import { GameContext } from 'src/game/context/game-context';
import { DEV_HOST_API, DEV_ASSET_API } from 'src/config-global';
import { useGameContext } from 'src/game/hook/use-game-context';

import { SpaceTravel } from 'src/components/space-travel';
import ScrollProgress from 'src/components/scroll-progress';
import ModelViewer from 'src/components/model-viewer/model-viewer';

import PlayLeftPanel from '../play-left-panel';
import PlayRightPanel from '../play-right-panel';
import classes from './custom-unity-player.module.scss';
import PlayFeatureBottom from '../play-feature-bottom-panel';

export default function PlayView() {
  const { data } = useGetGames();
  const [view, setView] = React.useState<boolean>(true);
  const [unityView, setUnityView] = React.useState<boolean>(false);
  const [progress, setProgress] = React.useState<number>(0);
  const [play, setPlay] = React.useState<boolean>(false);
  const [gameTitle, setGameTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [characterUrl, setCharacterUrl] = React.useState<string>();
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const uid = localStorage.getItem('uid');
    const currentCharacter = async (userId: string) => {
      try {
        const result = await getCurrentCharacter(userId);
        setCharacterUrl(`${DEV_HOST_API}${result}`);
      } catch (e) {
        console.error(e);
      }
    };
    if (uid) {
      currentCharacter(JSON.parse(uid));
    }
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setView(!!characterUrl);
    }, 3000);
  }, [characterUrl]);

  const memoContext = React.useMemo(
    () => ({
      data,
      progress,
      gameTitle,
      description,
      unityView,
      setDescription,
      setGameTitle,
      setPlay,
      setProgress,
      setUnityView,
    }),
    [data, progress, unityView, gameTitle, description]
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
      <GameContext.Provider value={memoContext}>
        <ScrollProgress scrollYProgress={scrollYProgress} />
        <SpaceTravel />
        <Box
          component="div"
          sx={{
            mt: 5,
            position: 'relative',
            width: '100%',
            height: '90vh',
            borderRadius: 2,
            overflow: 'auto',
            scrollbarWidth: 'none',
            bgcolor: '#FFFFFF00',
          }}
        >
          {play && gameTitle ? (
            <PlayGamePanel />
          ) : (
            <>
              <Box component="div" style={{ position: 'sticky', top: 0, height: '100%' }}>
                <Suspense fallback={<Loading sx={{ zIndex: -10 }} />}>{renderContent()}</Suspense>
                <Stack width={1} alignItems="end" style={{ top: 30 }}>
                  <PlayRightPanel />
                </Stack>
              </Box>
              <Stack sx={{ position: 'absolute', top: 'calc(100vh - 325px)' }}>
                <PlayLeftPanel />
              </Stack>
              <PlayFeatureBottom />
            </>
          )}
        </Box>
      </GameContext.Provider>
    </MainLayout>
  );
}

function PlayGamePanel() {
  const { data, gameTitle } = useGameContext();
  const [game] = data.filter((x: any) => x.gameTitle === gameTitle);
  const { files } = game;

  const [dataUrl] = files.filter((x: any) => x.gameFile0);
  const [codeUrl] = files.filter((x: any) => x.gameFile1);
  const [frameworkUrl] = files.filter((x: any) => x.gameFile2);
  const [loaderUrl] = files.filter((x: any) => x.gameFile3);

  const unityConfig = {
    loaderUrl: `${DEV_ASSET_API}/${loaderUrl.gameFile3}`,
    dataUrl: `${DEV_ASSET_API}/${dataUrl.gameFile0}`,
    frameworkUrl: `${DEV_ASSET_API}/${frameworkUrl.gameFile2}`,
    codeUrl: `${DEV_ASSET_API}/${codeUrl.gameFile1}`,
  };

  return (
    <Stack sx={{ width: '100%', height: '100%' }} direction="row" justifyContent="space-between">
      <Box
        component="div"
        sx={{
          background: '#ffffff00',
          width: '100%',
        }}
      >
        <div>{!!unityConfig && <UnityWrapper unityConfig={unityConfig} />}</div>
      </Box>
    </Stack>
  );
}

const UnityWrapper = ({ unityConfig }: any) => {
  const { unityView, setUnityView, setProgress } = useGameContext();
  const unityContext = useUnityContext(unityConfig);
  const { isLoaded, loadingProgression } = unityContext;
  console.log('isLoaded', isLoaded, loadingProgression);

  React.useEffect(() => {
    setProgress(isLoaded);
  }, [isLoaded, setProgress]);

  React.useEffect(() => {
    if (isLoaded) setTimeout(() => setUnityView(true), 2000);
  }, [isLoaded, setUnityView]);

  React.useEffect(() => {}, [unityView]);

  return (
    <Box component="div" className={classes.container}>
      <Unity
        unityProvider={unityContext.unityProvider}
        className={classes.unity}
        style={{ display: unityView ? 'inline' : 'none' }}
      />
    </Box>
  );
};

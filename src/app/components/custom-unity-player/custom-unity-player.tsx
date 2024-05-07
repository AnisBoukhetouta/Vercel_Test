import React from 'react';
import { getAuth } from 'firebase/auth';
import { Unity, UnityConfig, useUnityContext } from 'react-unity-webgl';

import { Box, Alert, Typography } from '@mui/material';

import Nebula from '../nebula/nebula';
import classes from './custom-unity-player.module.scss';

export default function CustomUnityPlayer() {
  const [unityConfig, setUnityConfig] = React.useState<UnityConfig | null>(null);

  React.useEffect(() => {
    setUnityConfig({
      loaderUrl: `/build/Public.loader.js`,
      dataUrl: `/build/Public.data`,
      frameworkUrl: `/build/Public.framework.js`,
      codeUrl: `/build/Public.wasm`,
    });
  }, []);

  return (
    <Box
      component="div"
      sx={{
        background: '#101014',
        width: '100%',
      }}
    >
      <div>{!!unityConfig && <UnityWrapper unityConfig={unityConfig} />}</div>
    </Box>
  );
}

const UnityWrapper = ({ unityConfig }: any) => {
  React.useEffect(() => {
    const auth = getAuth();
    const dataToSend = auth.currentUser?.displayName ?? `Noob00${Math.floor(Math.random() * 999)}`;
    sendDataToUnity(dataToSend);
  });

  const [completed, setCompleted] = React.useState(false);
  const [view, setView] = React.useState(false);
  const unityContext = useUnityContext(unityConfig);
  const { addEventListener, isLoaded, loadingProgression, sendMessage } = unityContext;
  console.log('isLoaded', isLoaded, loadingProgression);

  const onGameState = React.useCallback(
    (state: string) => {
      if (state) {
        setCompleted(!completed);
        setTimeout(() => console.log('COMPLETED'), 2000);
      }
    },
    [completed]
  );

  React.useEffect(() => {
    console.log('Initialize Unity Events');
    addEventListener('GameState', onGameState);

    return () => {
      removeEventListener('GameState', onGameState);
    };
  }, [addEventListener, onGameState]);

  React.useEffect(() => {
    if (isLoaded) setTimeout(() => setView(true), 2000);
  }, [isLoaded]);

  const sendDataToUnity = (userName: string) => {
    if (unityContext) {
      unityContext.sendMessage('RoomController', 'ReceiveDataFromWeb', userName);
    }
  };

  return (
    <div className={classes.container}>
      {!!completed && (
        <Alert
          variant="filled"
          severity="success"
          color="warning"
          sx={{ position: 'absolute', top: '8rem', zIndex: 50 }}
        >
          Congratulations!
          <br />
          You completed all game objects. <br />
          You received a prize.
          <br />
        </Alert>
      )}
      <Unity
        unityProvider={unityContext.unityProvider}
        className={classes.unity}
        style={{
          display: view ? 'inline' : 'none',
        }}
      />
      <div
        className={classes.loader}
        style={{
          display: !view ? 'inline' : 'none',
        }}
      >
        <Nebula />
      </div>
      <Typography
        style={{
          position: 'absolute',
          top: '59vh',
          zIndex: 10000,
          color: 'white',
          display: !view ? 'inline' : 'none',
        }}
      >
        Loading {Math.floor(loadingProgression * 100)} %
      </Typography>
    </div>
  );
};

import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { Unity, UnityConfig, useUnityContext } from "react-unity-webgl";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./playground.module.css";

const UnityWrapper = ({ unityConfig }) => {
  const navigate = useNavigate();
  const unityContext = useUnityContext(unityConfig);
  const { addEventListener, isLoaded, loadingProgression, sendMessage } = unityContext;
  console.log("isLoaded", isLoaded, loadingProgression);

  const onGameState = React.useCallback((state: string) => {
    if (state === 'DISCONNECT') {
      console.log('`````````Disconnected`````````');
    } else if (state === 'JOIN_SUCCESS') {
      console.log('`````````JOIN_SUCCESS`````````');
    } else if (state === 'READY_SUCCESS') {
      console.log('`````````READY_SUCCESS`````````');
    } else if (state === 'COMPLETED') {
      console.log('`````````COMPLETED`````````');
      // navigate('/inventory')
      alert('Game Completed');
    }
  }, []);

  useEffect(() => {
    console.log("Initialize Unity Events");
    addEventListener("GameState", onGameState);

    return () => {
      removeEventListener("GameState", onGameState);
    };
  }, [onGameState]);

  return (
    <div className={classes.container}>
      <Unity
        unityProvider={unityContext.unityProvider}
        className={classes.unity}
        style={{
          display: !!isLoaded ? "inline" : "none",
        }}
      />
      <div
        className={classes.loader}
        style={{
          display: !isLoaded ? "inline" : "none",
        }}
      ></div>
    </div>
  );
};

export default function Playground() {
  const location = useLocation();
  const baseUrl = import.meta.env.VITE_APP_BASE;
  const getFilesUrl = import.meta.env.VITE_GET_FILES;
  const [unityConfig, setUnityConfig] = React.useState<UnityConfig | null>(
    null
  );
  const state = location.state;

  const fetch = async (state) => {
    try {
      return axios.get(`${getFilesUrl}?gameTitle=${state}`).then((res) => {
        return res.data[0].files;
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetch(state).then((contain) => {
      setUnityConfig({
        loaderUrl: `${baseUrl}/${contain[0].destination}/${contain[6].fileName}`,
        dataUrl: `${baseUrl}/${contain[0].destination}/${contain[3].fileName}`,
        frameworkUrl: `${baseUrl}/${contain[0].destination}/${contain[5].fileName}`,
        codeUrl: `${baseUrl}/${contain[0].destination}/${contain[4].fileName}`,
      });
    });
  }, [state]);

  return (
    <>
      {/* {loading && <Loader />} */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          background: "#101014",
          height: "100vh",
        }}
      >
        <Container
          maxWidth="xl"
          style={{
            paddingTop: "4rem",
          }}
        >
          {!!unityConfig && <UnityWrapper unityConfig={unityConfig} />}
        </Container>
      </Box>
    </>
  );
}

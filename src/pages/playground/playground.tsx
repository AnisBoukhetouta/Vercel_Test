import React, { useEffect } from "react";
import { Alert, Box, Typography } from "@mui/material";
import { Unity, UnityConfig, useUnityContext } from "react-unity-webgl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./playground.module.css";
import Nebula from "../../components/Nebula/Nebula";
import { getAuth } from "firebase/auth";
import AppConstants from "../../AppConstants";
import { Game } from "../../@types/dataTypes";

const UnityWrapper = ({ unityConfig }) => {
  useEffect(() => {
    const auth = getAuth();
    const dataToSend =
      auth.currentUser?.displayName ??
      `Noob00${Math.floor(Math.random() * 999)}`;
    sendDataToUnity(dataToSend);
  });

  const navigate = useNavigate();
  const [completed, setCompleted] = React.useState(false);
  const [view, setView] = React.useState(false);
  const unityContext = useUnityContext(unityConfig);
  const { addEventListener, isLoaded, loadingProgression, sendMessage } =
    unityContext;
  console.log("isLoaded", isLoaded, loadingProgression);

  const onGameState = React.useCallback((state: string) => {
    if (state) {
      setCompleted(!completed);
      setTimeout(() => navigate("/inventory"), 2000);
    }
  }, []);

  useEffect(() => {
    console.log("Initialize Unity Events");
    addEventListener("GameState", onGameState);

    return () => {
      removeEventListener("GameState", onGameState);
    };
  }, [addEventListener, onGameState, removeEventListener]);

  useEffect(() => {
    !!isLoaded && setTimeout(() => setView(true), 2000);
  }, [isLoaded]);

  const sendDataToUnity = (userName) => {
    if (unityContext) {
      unityContext.sendMessage(
        "RoomController",
        "ReceiveDataFromWeb",
        userName
      );
    }
  };

  return (
    <div className={classes.container}>
      {!!completed && (
        <Alert
          variant="filled"
          severity="success"
          color="warning"
          sx={{ position: "absolute", top: "8rem", zIndex: 50 }}
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
          display: !!view ? "inline" : "none",
        }}
      />
      <div
        className={classes.loader}
        style={{
          display: !view ? "inline" : "none",
        }}
      >
        <Nebula />
      </div>
      <Typography
        style={{
          position: "absolute",
          top: "59vh",
          zIndex: 10000,
          color: "white",
          display: !view ? "inline" : "none",
        }}
      >
        Loading {Math.floor(loadingProgression * 100)} %
      </Typography>
    </div>
  );
};
interface Props {
  item: Game | any;
}
export default function Playground({ item }: Props) {
  const [unityConfig, setUnityConfig] = React.useState<UnityConfig | null>(
    null
  );

  React.useEffect(() => {
    console.log("@@@@@@@@@@", item);
    let unityFiles = item.files;
    let [data] = unityFiles.filter((x) => x.fieldName === "fileUpload0" && x);
    let [code] = unityFiles.filter((x) => x.fieldName === "fileUpload1" && x);
    let [frameWork] = unityFiles.filter(
      (x) => x.fieldName === "fileUpload2" && x
    );
    let [loader] = unityFiles.filter(
      (x) => x.fieldName === "fileUpload3" && x
    );
    setUnityConfig({
      loaderUrl: `${AppConstants.baseUrl}/${loader.destination}/${loader.fileName}`,
      dataUrl: `${AppConstants.baseUrl}/${data.destination}/${data.fileName}`,
      frameworkUrl: `${AppConstants.baseUrl}/${frameWork.destination}/${frameWork.fileName}`,
      codeUrl: `${AppConstants.baseUrl}/${code.destination}/${code.fileName}`,
    });
  }, [item]);

  // useEffect(() => {
  //   fetch(state).then((contain) => {
  //     setUnityConfig({
  //       loaderUrl: `${AppConstants.baseUrl}/${contain[0].destination}/${contain[6].fileName}`,
  //       dataUrl: `${AppConstants.baseUrl}/${contain[0].destination}/${contain[3].fileName}`,
  //       frameworkUrl: `${AppConstants.baseUrl}/${contain[0].destination}/${contain[5].fileName}`,
  //       codeUrl: `${AppConstants.baseUrl}/${contain[0].destination}/${contain[4].fileName}`,
  //     });
  //   });
  // }, [state]);

  return (
    <Box
      component="main"
      sx={{
        background: "#101014",
      }}
    >
      <div>{!!unityConfig && <UnityWrapper unityConfig={unityConfig} />}</div>
    </Box>
  );
}

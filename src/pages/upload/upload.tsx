import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import AppConstants from "../../AppConstants";
import { CloudUpload } from "@mui/icons-material";
import axios from "axios";
import FileUpload from "../../components/fileUpload/fileUpload";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const initialValues = {
  gameTitle: "",
  category: "",
  tags: "",
  description: "",
  controls: "",
  googlePlay: "",
  iOsApp: "",
  steamLink: "",
  gameType: "",
  landscapeFile: null,
  portraitFile: null,
  squareFile: null,
};

export default function Upload() {
  const [fileUpload, setFileUpload] = React.useState<File[]>([]);
  const [landscapeFile, setLandscapeFile] = React.useState<File | null>(null);
  const [portraitFile, setPortraitFile] = React.useState<File | null>(null);
  const [squareFile, setSquareFile] = React.useState<File | null>(null);
  const navigate = useNavigate();
  let uploadContainer: File[] = [];

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        let uid = user.uid;
        console.log("UID", uid);
      } else {
        navigate("/login");
        // console.log("No user is signed in.");
      }
    });
  }, []);

  useEffect(() => {
    console.log("FileUpload state updated:", fileUpload);
  }, [fileUpload]);
  useEffect(() => {
    console.log("LandscapeFile state updated:", landscapeFile);
  }, [landscapeFile]);

  const registerHandler = async (values, { setSubmitting }) => {
    console.log(values);
    const formData = new FormData();
    formData.append("gameTitle", values.gameTitle);
    formData.append("category", values.category);
    formData.append("tags", values.tags);
    formData.append("description", values.description);
    formData.append("controls", values.controls);
    formData.append("googlePlay", values.googlePlay);
    formData.append("iOsApp", values.iOsApp);
    formData.append("steamLink", values.steamLink);
    formData.append("gameType", values.gameType);
    landscapeFile && formData.append("landscapeFile", landscapeFile[0]);
    portraitFile && formData.append("portraitFile", portraitFile[0]);
    squareFile && formData.append("squareFile", squareFile[0]);
    fileUpload.map((file, index) => {
      // formData.append(`fileUpload${index}`, file);
      const data = ".data";
      const wasm = ".wasm";
      const framework = ".framework";
      const loader = ".loader";
      if (file.name.includes(data)) {
        uploadContainer[0] = file;
      }
      if (file.name.includes(wasm)) {
        uploadContainer[1] = file;
      }
      if (file.name.includes(framework)) {
        uploadContainer[2] = file;
      }
      if (file.name.includes(loader)) {
        uploadContainer[3] = file;
      }
    });
    uploadContainer.map((file, index) => {
      formData.append(`fileUpload${index}`, file);
    });
    try {
      const response = await axios.post(
        "https://grat.fun/api/pwniq/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setSubmitting(false);
      window.location.replace("/gamelobby");
    } catch (e) {
      console.log("Error submitting form:", e);
    }
  };

  return (
    <Container
      style={{
        paddingTop: "8rem",
        color: "rgb(237, 237, 237)",
      }}
    >
      <Formik
        initialValues={{
          ...initialValues,
          fileUpload,
          landscapeFile,
          portraitFile,
          squareFile,
        }}
        onSubmit={registerHandler}
      >
        {(formik) => (
          <Form>
            <h1>Submit Game</h1>{" "}
            <Paper
              sx={{
                marginTop: 3,
                padding: 5,
                backgroundColor: "rgba(54, 52, 52, 0.744)",
                color: "rgb(202, 196, 196)",
              }}
            >
              <h2>Game details</h2>
              <Stack spacing={5}>
                <Box>
                  <Typography>Game title *</Typography>
                  <TextField
                    name="gameTitle"
                    variant="outlined"
                    sx={{ width: 500 }}
                    id="gameTitle"
                    required
                    value={formik.values.gameTitle}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.gameTitle &&
                      Boolean(formik.errors.gameTitle)
                    }
                    helperText={
                      formik.touched.gameTitle && formik.errors.gameTitle
                    }
                  />
                </Box>
                <Box>
                  <Typography>Category *</Typography>
                  <Autocomplete
                    sx={{ width: 500 }}
                    options={AppConstants.categories}
                    onChange={(event, value) =>
                      (formik.values.category = value || "")
                    }
                    renderInput={(params) => (
                      <TextField
                        name="category"
                        required
                        value={formik.values.category}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.category &&
                          Boolean(formik.errors.category)
                        }
                        helperText={
                          formik.touched.category && formik.errors.category
                        }
                        {...params}
                      />
                    )}
                  />
                </Box>
                <Box>
                  <Typography>Tags *</Typography>
                  <Autocomplete
                    onChange={(event, value) =>
                      (formik.values.tags = value || "")
                    }
                    sx={{ width: 500 }}
                    options={AppConstants.tags}
                    renderInput={(params) => (
                      <TextField
                        name="tags"
                        required
                        value={formik.values.tags}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.tags && Boolean(formik.errors.tags)
                        }
                        helperText={formik.touched.tags && formik.errors.tags}
                        {...params}
                      />
                    )}
                  />
                </Box>
                <Typography>Description *</Typography>
                <TextareaAutosize
                  name="description"
                  required
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    margin: 0,
                    height: 200,
                    backgroundColor: "#00000000",
                    color: "rgb(202, 196, 196)",
                    border: "1px solid white",
                    padding: 5,
                  }}
                />
                <Typography>Controls *</Typography>
                <TextareaAutosize
                  name="controls"
                  required
                  value={formik.values.controls}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    margin: 0,
                    height: 200,
                    backgroundColor: "#00000000",
                    color: "rgb(202, 196, 196)",
                    border: "1px solid white",
                    padding: 5,
                  }}
                />

                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="column" width={300}>
                    <span>Google Play Store link</span>
                    <TextField
                      name="googlePlay"
                      value={formik.values.googlePlay}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.googlePlay &&
                        Boolean(formik.errors.googlePlay)
                      }
                      helperText={
                        formik.touched.googlePlay && formik.errors.googlePlay
                      }
                      variant="outlined"
                    />
                  </Stack>
                  <Stack direction="column" width={300}>
                    <span>iOS App Store link</span>
                    <TextField
                      name="iOsApp"
                      value={formik.values.iOsApp}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.iOsApp && Boolean(formik.errors.iOsApp)
                      }
                      helperText={formik.touched.iOsApp && formik.errors.iOsApp}
                      variant="outlined"
                    />
                  </Stack>
                  <Stack direction="column" width={300}>
                    <span>Steam link</span>
                    <TextField
                      name="steamLink"
                      value={formik.values.steamLink}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.steamLink &&
                        Boolean(formik.errors.steamLink)
                      }
                      helperText={
                        formik.touched.steamLink && formik.errors.steamLink
                      }
                      variant="outlined"
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Paper>
            <Paper
              sx={{
                marginTop: 3,
                padding: 5,
                backgroundColor: "rgba(54, 52, 52, 0.744)",
                color: "rgb(202, 196, 196)",
              }}
            >
              <h2>Game Type</h2>
              <Box>
                <Typography>Game Type *</Typography>
                <Autocomplete
                  sx={{ width: 500 }}
                  onChange={(event, value) =>
                    (formik.values.gameType = value || "")
                  }
                  options={AppConstants.gameTypes}
                  renderInput={(params) => (
                    <TextField
                      name="gameType"
                      required
                      value={formik.values.gameType}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.gameType &&
                        Boolean(formik.errors.gameType)
                      }
                      helperText={
                        formik.touched.gameType && formik.errors.gameType
                      }
                      {...params}
                    />
                  )}
                />
              </Box>
            </Paper>
            <Paper
              sx={{
                marginTop: 3,
                padding: 5,
                backgroundColor: "rgba(54, 52, 52, 0.744)",
                color: "rgb(202, 196, 196)",
              }}
            >
              <h2>Files *</h2>
              <div>
                <Typography>File Upload *</Typography>
                <FileUpload
                  title="Game files"
                  fieldName="fileUpload"
                  height={400}
                  setFieldValue={setFileUpload}
                  maxFiles={4}
                />
              </div>
              <h2 style={{ marginTop: 30 }}>Cover Images</h2>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <div style={{ width: "45%" }}>
                  <Typography>Landscape 16:9 (1920x1080)</Typography>
                  <FileUpload
                    fieldName="landscapeFile"
                    title="Landscape image file"
                    height={280}
                    setFieldValue={setLandscapeFile}
                  />
                </div>
                <div style={{ width: "25%" }}>
                  <Typography>Portrait 2:3 (800x1200)</Typography>
                  <FileUpload
                    title="Portrait image file"
                    fieldName="portraitFile"
                    height={350}
                    setFieldValue={setPortraitFile}
                  />
                </div>
                <div style={{ width: "25%" }}>
                  <Typography>Square 1:1 (800x800)</Typography>
                  <FileUpload
                    title="Square image file"
                    fieldName="squareFile"
                    height={200}
                    setFieldValue={setSquareFile}
                  />
                </div>
              </Stack>
              <Stack direction="row" sx={{ justifyContent: "end" }}>
                <Button
                  startIcon={<CloudUpload />}
                  type="submit"
                  disabled={formik.isSubmitting}
                  variant="contained"
                  sx={{
                    marginTop: 5,
                    marginBottom: 5,
                    padding: 2,
                  }}
                >
                  Upload
                </Button>
              </Stack>
            </Paper>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

import React from "react";
import { Form, Formik } from "formik";
import {
  Alert,
  Autocomplete,
  Paper,
  Stack,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import AppConstants from "../../AppConstants";
import FileUpload from "../../components/fileUpload/fileUpload";
import { CloudUpload } from "@mui/icons-material";
import HelpIcon from "@mui/icons-material/Help";
import classes from "./upload.module.css";
import axios from "axios";

const initialValues = {
  gameTitle: "",
  gameSubTitle: "",
  gameSlug: "",
  mainImageFile: null,
  secondImageFile: null,
};
export default function GameUpload() {
  const [fileUpload, setFileUpload] = React.useState<File[]>([]);
  const [mainImageFile, setMainImageFile] = React.useState<File[] | null>(null);
  const [secondImageFile, setSecondImageFile] = React.useState<File[] | null>(
    null
  );
  let uploadContainer: File[] = [];

  const onUpload = async (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append("gameTitle", values.gameTitle);
    formData.append("gameSubTitle", values.gameSubTitle);
    formData.append("gameSlug", values.gameSlug);
    mainImageFile && formData.append("mainImageFile", mainImageFile[0]);
    secondImageFile && formData.append("secondImageFile", secondImageFile[0]);
    fileUpload.map((file, index) => {
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
      await axios.post(AppConstants.uploadUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSubmitting(false);
      window.location.replace("/");
    } catch (e) {
      console.log("Error submitting form:", e);
    }
  };
  const checkMainImage = mainImageFile && mainImageFile?.length > 0;
  return (
    <Formik
      initialValues={{
        ...initialValues,
        fileUpload,
        mainImageFile,
        secondImageFile,
      }}
      onSubmit={onUpload}
    >
      {(formik) => (
        <Form>
          <h2 className={classes.heading}>PwnIQ Game Upload</h2>
          <Paper
            sx={{
              marginTop: 3,
              padding: 5,
              backgroundColor: "rgba(54, 52, 52, 0.744)",
              color: "rgb(202, 196, 196)",
            }}
          >
            <h2 className={classes.pageTitle}>Game details</h2>
            <Stack>
              <div>
                <div className={classes.fieldName}>Game Title *</div>
                <TextField
                  name="gameTitle"
                  variant="outlined"
                  sx={{ width: "50%" }}
                  id="gameTitle"
                  required
                  value={formik.values.gameTitle}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.gameTitle && Boolean(formik.errors.gameTitle)
                  }
                  helperText={
                    formik.touched.gameTitle && formik.errors.gameTitle
                  }
                />
                <div className={classes.description2}>
                  Must be the same as the title that appears in your game - Max
                  length is 40 chars.
                </div>
              </div>
              <div>
                <div className={classes.fieldName}>Game Subtitle *</div>
                <TextField
                  name="gameSubTitle"
                  variant="outlined"
                  sx={{ width: "50%" }}
                  id="gameSubTitle"
                  required
                  value={formik.values.gameSubTitle}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.gameSubTitle &&
                    Boolean(formik.errors.gameSubTitle)
                  }
                  helperText={
                    formik.touched.gameSubTitle && formik.errors.gameSubTitle
                  }
                />
                <div className={classes.description2}>
                  Must be the same as the title that appears in your game - Max
                  length is 40 chars.
                </div>
              </div>
              <div>
                <div className={classes.fieldName}>Game Slug *</div>
                <TextField
                  name="gameSlug"
                  variant="outlined"
                  sx={{ width: "50%" }}
                  id="gameSlug"
                  required
                  value={formik.values.gameSlug}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.gameSlug && Boolean(formik.errors.gameSlug)
                  }
                  helperText={formik.touched.gameSlug && formik.errors.gameSlug}
                />
                <div className={classes.description2}>
                  Must be the same as the title that appears in your game - Max
                  length is 40 chars.
                </div>
              </div>
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
            <h2 className={classes.pageTitle}>Files *</h2>
            <div>
              <div className={classes.alignedFlexBox}>
                <div className={classes.fieldName}>File Upload *</div>
                <HelpIcon
                  fontSize="small"
                  sx={{ marginTop: "24px", marginBottom: " 10px" }}
                />
              </div>
              <FileUpload
                title="Game files"
                fieldName="fileUpload"
                height={400}
                setFieldValue={setFileUpload}
                maxFiles={4}
              />
            </div>
            <h2 className={classes.fieldName}>Cover Images *</h2>
            <Alert variant="filled" severity="warning">
              Please read our CrazyGames documentation carefully before
              submitting a game!
            </Alert>
            <div className={classes.description2}>
              We will use the cover image to show your game on our pages
              (homepage, category pages, …). Make it appealing and professional
              looking! A good cover image will make the users want to play your
              game. For more information, make sure to read our{" "}
              <a href="#" className={classes.alink}>
                guidelines for game covers.
              </a>
            </div>
            <Stack
              direction="column"
              sx={{
                justifyContent: checkMainImage ? "space-between" : "center",
              }}
            >
              <div className={classes.uploadBox}>
                <div style={{ width: "45%" }}>
                  <div className={classes.fieldName}>Main Image * (*.png)</div>
                  <FileUpload
                    title="Main Image"
                    fieldName="mainImageFile"
                    height={270}
                    setFieldValue={setMainImageFile}
                  />
                </div>
                <div className={classes.previewBox}></div>
              </div>
              {checkMainImage && (
                <div className={classes.uploadBox}>
                  <div style={{ width: "45%" }}>
                    <div className={classes.fieldName}>
                      Secondary Image (*.png)
                    </div>
                    <FileUpload
                      title="Second Image"
                      fieldName="secondImageFile"
                      height={270}
                      setFieldValue={setSecondImageFile}
                    />
                  </div>
                  <div className={classes.previewBox}></div>
                </div>
              )}
            </Stack>
            <Stack direction="row" sx={{ justifyContent: "end" }}>
              <div className={classes.buttonline}>
                <button className={classes.lobbyHeaderButton} type="submit">
                  <CloudUpload fontSize="large" />
                  <div>Upload</div>
                </button>
              </div>
            </Stack>
          </Paper>
        </Form>
      )}
    </Formik>
  );
}

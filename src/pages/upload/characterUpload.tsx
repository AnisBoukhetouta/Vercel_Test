import React from "react";
import { Form, Formik } from "formik";
import { Button, Paper, Stack, Typography } from "@mui/material";
import FileUpload from "../../components/fileUpload/fileUpload";
import { CloudUpload } from "@mui/icons-material";
import { auth } from "../../firebase";
import axios from "axios";

interface Prop {
  uid: string;
}

export default function CharacterUpload({ uid }: Prop) {
  const characterFileUploadUrl = import.meta.env.VITE_CHARACTER_FILE_UPLOAD;
  const [characterFileUpload, setCharacterFileUpload] =
    React.useState<File | null>(null);

  const onCharacterUpload = async (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append("uid", uid);
    characterFileUpload &&
      formData.append("characterFileUpload", characterFileUpload[0]);
    try {
      await axios.post(characterFileUploadUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSubmitting(false);
      window.location.replace("/inventory");
    } catch (e) {
      console.log("Error submitting form:", e);
    }
  };

  return (
    <Formik
      initialValues={{
        characterFileUpload,
      }}
      onSubmit={onCharacterUpload}
    >
      {(formik) => (
        <Form>
          <h1 style={{ paddingTop: "3rem" }}>
            Character or Backbling File Upload
          </h1>
          <Paper
            sx={{
              marginTop: 3,
              padding: 5,
              backgroundColor: "rgba(54, 52, 52, 0.744)",
              color: "rgb(202, 196, 196)",
            }}
          >
            <Typography>File Upload *</Typography>
            <FileUpload
              title="Character or Backbling file"
              fieldName="characterFileUpload"
              height={400}
              setFieldValue={setCharacterFileUpload}
              maxFiles={1}
            />
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
  );
}

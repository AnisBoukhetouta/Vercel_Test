'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import { Grid, Stack, Button } from '@mui/material';

import { CustomUpload } from 'src/components/custom-upload';
import { SmallTypography, SmallRequiredTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateImage() {
  const [mainFile, setMainFile] = React.useState<File | string | null>(null);
  const [secondFile, setSecondFile] = React.useState<File | string | null>(null);
  const { setFieldValue } = useFormikContext();

  const accept = { 'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.bmp', '.webp', '.tiff', '.svg'] };

  const handleDropMainFile = React.useCallback(
    (acceptedFiles: File[]) => {
      const newFile = acceptedFiles[0];
      if (newFile) {
        setMainFile(
          Object.assign(newFile, {
            preview: URL.createObjectURL(newFile),
          })
        );
        setFieldValue('mainImage', newFile);
      }
    },
    [setFieldValue]
  );

  const handleDropSecondFile = React.useCallback(
    (acceptedFiles: File[]) => {
      const newFile = acceptedFiles[0];
      if (newFile) {
        setSecondFile(
          Object.assign(newFile, {
            preview: URL.createObjectURL(newFile),
          })
        );
        setFieldValue('secondImage', newFile);
      }
    },
    [setFieldValue]
  );

  return (
    <Grid container spacing={5}>
      <Grid item md={6} lg={4.75}>
        <Grid container>
          <Grid item xs={4.3}>
            <SmallRequiredTypography title="UPLOAD MAIN IMAGE" />
          </Grid>
          <Grid item xs={7.7}>
            <CustomUpload
              file={mainFile}
              onDrop={handleDropMainFile}
              onDelete={() => {
                setMainFile(null);
                setFieldValue('mainImage', null);
              }}
              accept={accept}
              sx={{ width: '100%' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} lg={4.75}>
        <Grid container>
          <Grid item xs={4}>
            <SmallTypography title="UPLOAD SECONDARY IMAGE" />
          </Grid>
          <Grid item xs={8}>
            <CustomUpload
              file={secondFile}
              onDrop={handleDropSecondFile}
              onDelete={() => {
                setSecondFile(null);
                setFieldValue('secondImage', null);
              }}
              accept={accept}
              sx={{ width: '100%' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} lg={2.5}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Stack gap={1} justifyContent="space-between">
              <SmallRequiredTypography title="MAIN COLOR" />
              {colors.map((types, index) => (
                <Button
                  key={index}
                  variant="contained"
                  color={types.color}
                  onClick={() => {
                    setFieldValue('mainColor', types.color);
                  }}
                >
                  {types.name}
                </Button>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack gap={1} justifyContent="space-between">
              <SmallTypography title="SECONDARY COLOR" />
              {colors.map((types, index) => (
                <Button
                  key={index + 6}
                  variant="contained"
                  color={types.color}
                  onClick={() => {
                    setFieldValue('secondColor', types.color);
                  }}
                >
                  {types.name}
                </Button>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const colors = [
  { color: 'primary', name: 'BLUE' },
  { color: 'secondary', name: 'GREEN' },
  { color: 'info', name: 'INFO' },
  { color: 'success', name: 'SUCCESS' },
  { color: 'warning', name: 'WARNING' },
  { color: 'error', name: 'RED' },
];

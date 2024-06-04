'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import { Grid } from '@mui/material';

import { CustomUpload } from 'src/components/custom-upload';
import { SmallRequiredTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateRewardGlb() {
  const [mainFile, setMainFile] = React.useState<File | string | null>(null);
  const [secondFile, setSecondFile] = React.useState<File | string | null>(null);

  const accept = { 'model/gltf-binary': ['.glb', '.gltf'] };

  const { setFieldValue } = useFormikContext();

  const handleDropMainFile = React.useCallback(
    (acceptedFiles: File[]) => {
      const newFile = acceptedFiles[0];
      if (newFile) {
        setMainFile(
          Object.assign(newFile, {
            preview: URL.createObjectURL(newFile),
          })
        );
        setFieldValue('rewardGlb', newFile);
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
        setFieldValue('backgroundGlb', newFile);
      }
    },
    [setFieldValue]
  );

  return (
    <Grid container spacing={5}>
      <Grid item md={6} lg={4.75}>
        <Grid container>
          <Grid item xs={4.3}>
            <SmallRequiredTypography title="UPLOAD REWARD GLB" />
          </Grid>
          <Grid item xs={7.7}>
            <CustomUpload
              file={mainFile}
              onDrop={handleDropMainFile}
              onDelete={() => {
                setMainFile(null);
                setFieldValue('rewardGlb', null);
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
            <SmallRequiredTypography title="UPLOAD BACKGROUND GLB" />
          </Grid>
          <Grid item xs={8}>
            <CustomUpload
              file={secondFile}
              onDrop={handleDropSecondFile}
              onDelete={() => {
                setSecondFile(null);
                setFieldValue('backgroundGlb', null);
              }}
              accept={accept}
              sx={{ width: '100%' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

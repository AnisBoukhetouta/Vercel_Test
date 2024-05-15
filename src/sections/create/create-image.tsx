'use client';

import React from 'react';

import { Stack, Button } from '@mui/material';

import { CustomUpload } from 'src/components/custom-upload';
import { SmallTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateImage() {
  const [mainFile, setMainFile] = React.useState<File | string | null>(null);
  const [secondFile, setSecondFile] = React.useState<File | string | null>(null);

  const handleDropMainFile = React.useCallback((acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];
    if (newFile) {
      setMainFile(
        Object.assign(newFile, {
          preview: URL.createObjectURL(newFile),
        })
      );
    }
  }, []);

  const handleDropSecondFile = React.useCallback((acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];
    if (newFile) {
      setSecondFile(
        Object.assign(newFile, {
          preview: URL.createObjectURL(newFile),
        })
      );
    }
  }, []);

  return (
    <Stack direction="row" gap={3} flexWrap="wrap" justifyContent="space-between">
      <Stack direction="row">
        <SmallTypography title="UPLOAD MAIN IMAGE" />
        <CustomUpload
          file={mainFile}
          onDrop={handleDropMainFile}
          onDelete={() => setMainFile(null)}
          sx={{ width: '450px' }}
        />
      </Stack>
      <Stack direction="row" gap={3}>
        <SmallTypography title="UPLOAD SECONDARY IMAGE" />
        <CustomUpload
          file={secondFile}
          onDrop={handleDropSecondFile}
          onDelete={() => setSecondFile(null)}
          sx={{ width: '450px' }}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <Stack gap={1} justifyContent="space-between">
          <SmallTypography title="MAIN COLOR" />
          <Button variant="contained" color="primary">
            BLUE
          </Button>
          <Button variant="contained" color="secondary">
            GREEN
          </Button>
          <Button variant="contained" color="info">
            INFO
          </Button>
          <Button variant="contained" color="success">
            SUCCESS
          </Button>
          <Button variant="contained" color="warning">
            WARNING
          </Button>
          <Button variant="contained" color="error">
            RED
          </Button>
        </Stack>
        <Stack gap={1} justifyContent="space-between">
          <SmallTypography title="SECONDARY COLOR" />
          <Button variant="contained" color="primary">
            BLUE
          </Button>
          <Button variant="contained" color="secondary">
            GREEN
          </Button>
          <Button variant="contained" color="info">
            INFO
          </Button>
          <Button variant="contained" color="success">
            SUCCESS
          </Button>
          <Button variant="contained" color="warning">
            WARNING
          </Button>
          <Button variant="contained" color="error">
            RED
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

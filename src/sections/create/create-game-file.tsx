'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import { Grid, Stack, Switch, CardHeader, CardContent, FormControlLabel } from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { CustomUpload } from 'src/components/custom-upload';
import { SmallRequiredTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateGameFile() {
  const preview = useBoolean();
  const [files, setFiles] = React.useState<(File | string)[]>([]);

  const accept = {
    'application/data': ['.data'],
    'application/wasm': ['.wasm'],
    'application/javascript': ['.js'],
    'application/gzip': ['.gz'],
    'application/brotli': ['.br'],
  };

  const { setFieldValue } = useFormikContext();

  const handleDropMultiFile = React.useCallback(
    (acceptedFiles: File[]) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((newFile) =>
          Object.assign(newFile, {
            preview: URL.createObjectURL(newFile),
          })
        ),
      ]);
      setFieldValue('gameFiles', [...acceptedFiles]);
    },
    [files, setFieldValue]
  );

  const handleRemoveFile = (inputFile: File | string) => {
    const filesFiltered = files.filter((fileFiltered) => fileFiltered !== inputFile);
    setFiles(filesFiltered);
    setFieldValue('gameFiles', filesFiltered);
  };

  const handleRemoveAllFiles = () => {
    setFiles([]);
    setFieldValue('gameFiles', []);
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={1.6}>
        <SmallRequiredTypography title="GAME FILE UPLOAD" />
      </Grid>
      <Grid item xs={11} sm={10.4}>
        <Stack width="100%">
          <CardHeader
            // title="Upload Game Files *"
            sx={{ p: 0 }}
            action={
              <FormControlLabel
                control={<Switch checked={preview.value} onClick={preview.onToggle} />}
                label="Show Thumbnail"
              />
            }
          />
          <CardContent sx={{ p: 0 }}>
            <CustomUpload
              multiple
              thumbnail={preview.value}
              files={files}
              accept={accept}
              onDrop={handleDropMultiFile}
              onRemove={handleRemoveFile}
              onRemoveAll={handleRemoveAllFiles}
              onUpload={() => console.info('ON UPLOAD')}
              title="Drop or Select Game Files"
              description="Yout must upload 4 build files of unity. That files must be *.js, *.data, *.wasm, *.gz or *.br"
            />
          </CardContent>
        </Stack>
      </Grid>
    </Grid>
  );
}

'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import { Stack, Switch, CardHeader, CardContent, FormControlLabel } from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { CustomUpload } from 'src/components/custom-upload';
import { SmallRequiredTypography } from 'src/components/custom-typo/custom-typo';

export default function CreateGameFile() {
  const preview = useBoolean();
  const [files, setFiles] = React.useState<(File | string)[]>([]);

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
    <Stack direction="row">
      <SmallRequiredTypography title="GAME FILE UPLOAD" />
      <Stack width="90%" gap={3}>
        <CardHeader
          title="Upload Game Files *"
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
            onDrop={handleDropMultiFile}
            onRemove={handleRemoveFile}
            onRemoveAll={handleRemoveAllFiles}
            onUpload={() => console.info('ON UPLOAD')}
          />
        </CardContent>
      </Stack>
    </Stack>
  );
}

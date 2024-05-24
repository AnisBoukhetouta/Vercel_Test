'use client';

import React from 'react';
import axios from 'axios';
import { Form, Formik } from 'formik';

import { Stack, Button } from '@mui/material';

import CreateType from '../create-type';
import CreateImage from '../create-image';
import CreateDetails from '../create-details';
import CreateOptions from '../create-options';
// import CreatePreview from '../create-preview';
import CreateGameFile from '../create-game-file';
import CreateRewardGlb from '../create-reward-glb';

export default function CreateView() {
  const initialValues = {
    gameType: '',
    gameTitle: '',
    gameDescription: '',
    gameOptions: true,
    mainImage: null,
    secondImage: null,
    rewardGlb: null,
    backgroundGlb: null,
    gameFiles: [],
  };

  const onSubmit = async (values: any, { setSubmitting }: any) => {
    const createContainer: File[] = [];
    const formData = new FormData();
    formData.append('gameType', values.gameType);
    formData.append('gameTitle', values.gameTitle);
    formData.append('gameDescription', values.gameDescription);
    formData.append('gameOptions', values.gameOptions);
    formData.append('mainImage', values.mainImage);
    formData.append('secondImage', values.secondImage);
    formData.append('rewardGlb', values.rewardGlb);
    formData.append('backgroundGlb', values.backgroundGlb);
    values.gameFiles.forEach((file: any) => {
      const data = '.data';
      const wasm = '.wasm';
      const framework = '.framework';
      const loader = '.loader';
      if (file.name.includes(data)) {
        createContainer[0] = file;
      }
      if (file.name.includes(wasm)) {
        createContainer[1] = file;
      }
      if (file.name.includes(framework)) {
        createContainer[2] = file;
      }
      if (file.name.includes(loader)) {
        createContainer[3] = file;
      }
    });
    createContainer.forEach((file: any, index: number) => {
      formData.append(`fileUplaod${index}`, file);
    });

    console.log('~~~~~~~~~~~~~~~~~~~~~', formData);
    try {
      const response = await axios.post('http://localhost:6001/api/pwniq/api/test', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response);
    } catch (error) {
      console.error('Form Submit Error:', error);
    }

    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <Stack gap={5}>
            <CreateType />
            <CreateDetails />
            <CreateOptions />
            <CreateImage />
            <CreateRewardGlb />
            <CreateGameFile />
            <Stack direction="row" justifyContent="end">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={formik.isSubmitting}
                sx={{ fontSize: '20px', width: '250px' }}
              >
                Upload
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

'use client';

import React from 'react';
import { Form, Formik } from 'formik';

import { Stack, Button } from '@mui/material';

import CreateGameProvider from 'src/create-game/context/create-game-provider';

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
    gameFiles: null,
  };

  return (
    <CreateGameProvider>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => console.log('~~~SUBMIT~~~', values, actions)}
      >
        {(formik) => {
          console.log('@@@@@@@@@', formik.values.gameOptions);
          return (
            <Form>
              <Stack gap={5}>
                <CreateType />
                <CreateDetails />
                <CreateOptions />
                <CreateImage />
                {/* <CreatePreview /> */}
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
          );
        }}
      </Formik>
    </CreateGameProvider>
  );
}

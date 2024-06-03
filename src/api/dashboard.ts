import axios from 'axios';

import { endpoints } from 'src/utils/axios';

import { DEV_HOST_API } from 'src/config-global';

const GET_ALL_CHARACTERS_URL = `${DEV_HOST_API}${endpoints.dashboard.allCharacters}`;
const MUTATE_CHARACTER_URL = `${DEV_HOST_API}${endpoints.dashboard.mutateCharacter}`;
const GET_CURRENT_CHARACTER_URL = `${DEV_HOST_API}${endpoints.dashboard.getCurrentCharacter}`;

export const getAllCharacters = async () => {
  try {
    const { data } = await axios.get(GET_ALL_CHARACTERS_URL);
    return data;
  } catch (e) {
    return console.error(e);
  }
};

type PostProp = {
  uid: string;
  skinId: string;
};

export const mutateCharacter = async (postData: PostProp) => {
  try {
    const { data } = await axios.post(MUTATE_CHARACTER_URL, postData);
    return data;
  } catch (e) {
    return console.error(e);
  }
};

export const getCurrentCharacter = async (uid: string) => {
  try {
    const { data } = await axios.post(GET_CURRENT_CHARACTER_URL, { uid });
    return data;
  } catch (e) {
    return console.error(e);
  }
};

import axios from 'axios';

import { endpoints } from 'src/utils/axios';

import { DEV_HOST_API } from 'src/config-global';

const GET_ALL_CHARACTERS_URL = `${DEV_HOST_API}${endpoints.dashboard.allCharacters}`;

export const getAllCharacters = async () => {
  try {
    const { data } = await axios.get(GET_ALL_CHARACTERS_URL);
    return data;
  } catch (e) {
    return console.error(e);
  }
};

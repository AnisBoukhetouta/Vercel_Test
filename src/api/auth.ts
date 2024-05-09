import axios from 'axios';

import { endpoints } from 'src/utils/axios';

import { HOST_API } from 'src/config-global';

const POST_URL = `${HOST_API}${endpoints.auth.userInfo}`;
const MUTATE_URL = `${HOST_API}${endpoints.auth.mutateUserInfo}`;

export const postUserInfo = async (args: any) => {
  try {
    const response = await axios.post(POST_URL, args);
    return response;
  } catch (err) {
    console.log(err);
    return console.log(err);
  }
};

export const mutateUserInfo = async (args: any) => {
  try {
    const response = await axios.post(MUTATE_URL, args);
    return response;
  } catch (err) {
    console.log(err);
    return console.log(err);
  }
};

import axios from 'axios';

import { endpoints } from 'src/utils/axios';

import { DEV_HOST_API } from 'src/config-global';

const POST_URL = `${DEV_HOST_API}${endpoints.auth.userInfo}`;
const MUTATE_URL = `${DEV_HOST_API}${endpoints.auth.mutateUserInfo}`;
const CODE_CHECK_URL = `${DEV_HOST_API}${endpoints.auth.codeCheck}`;

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

export const codeCheckApi = async (args: any) => {
  try {
    const { data } = await axios.post(CODE_CHECK_URL, args);
    return data;
  } catch (err) {
    console.error(err);
    return console.error(err);
  }
};

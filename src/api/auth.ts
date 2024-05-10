import axios from 'axios';

import { endpoints } from 'src/utils/axios';

const POST_URL = `https://grat.fun${endpoints.auth.userInfo}`;
const MUTATE_URL = `https://grat.fun${endpoints.auth.mutateUserInfo}`;

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

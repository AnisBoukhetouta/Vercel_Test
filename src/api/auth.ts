import axios from 'axios';

import { endpoints } from 'src/utils/axios';

import { HOST_API } from 'src/config-global';

const URL = `${HOST_API}/${endpoints.auth.userInfo}`;

export const postUserInfo = async (args: any) => {
  try {
    const response = await axios.post(URL, args);
    return response;
  } catch (err) {
    console.log(err);
    return console.log(err);
  }
};

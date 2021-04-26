import axios from 'axios';

import { config } from './config';

export default class Api {
  // Helpers
  static get = async endpoint => {
    // await Api.checkJWT();
    const url = config.BASE_URL + endpoint;
    return axios.get(url, Api.Config);
  };

  static post = async (endpoint, data) => {
    // await Api.checkJWT();
    const url = config.BASE_URL + endpoint;
    return axios.post(url, data, Api.Config);
  };

  static patch = async (endpoint, data) => {
    // await Api.checkJWT();
    const url = config.BASE_URL + endpoint;
    return axios.patch(url, data, Api.Config);
  };

  // Here goes other API calls
}

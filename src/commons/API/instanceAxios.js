import axios from "axios";
import queryString from "query-string";
import * as CONSTANTS from "../../constants/API";

/**
 * Set up default config for http requests here
 * Please have a look at here: https://github.com/axios/axios#request- config for the full list of configs
 */

const instanceAxios = axios.create({
  baseURL: CONSTANTS.API_FAKE,
  paramsSerializer: params => queryString.stringify(params),
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

instanceAxios.interceptors.request.use(async config => {
  // loader
  document.body.classList.add("loading-indicator");
  // Handle token here ...

  return config;
});

instanceAxios.interceptors.response.use(
  response => {
    document.body.classList.remove("loading-indicator");
    return response;
  },
  error => {
    document.body.classList.remove("loading-indicator");
    return Promise.reject(error);
  }
);

export default instanceAxios;

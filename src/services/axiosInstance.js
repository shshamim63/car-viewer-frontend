import axios from "axios";
import { API_URL } from "../utils/constants";

let accessToken = null;

export const setAxiosAccessToken = (token) => {
  accessToken = token;
};

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

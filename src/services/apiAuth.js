import { safeApiCall } from "../utils/requestWrapper";
import { axiosInstance } from "./axiosInstance";

export const authService = {
  login: async ({ email, password }) => {
    const requestBody = { email, password };

    const fetchProfile = () => axiosInstance.post(`/auth/login`, requestBody);

    const { data, error } = await safeApiCall(fetchProfile);

    if (error) throw new Error(error.message);

    return data;
  },
  signup: async ({
    firstName,
    lastName,
    email,
    username,
    password,
    confirmPassword,
  }) => {
    const requestBody = {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
    };
    const singupUser = () => axiosInstance.post(`/auth/signup`, requestBody);

    const { data, error } = await safeApiCall(singupUser);

    if (error) throw new Error(error.message);

    return data;
  },
  refresh: async () => {
    const fetchProfile = () => axiosInstance.post("/auth/refresh");
    const { data, error } = await safeApiCall(fetchProfile);

    if (error) throw new Error(error.message);

    return data;
  },
  profile: async () => {
    const fetchProfile = () => axiosInstance.get("/users/profile");

    const { data, error } = await safeApiCall(fetchProfile);

    if (error) throw new Error(error.message);

    return data;
  },
  logout: async () => {
    const logoutCallback = () => axiosInstance.post("/auth/logout");

    const { data, error } = await safeApiCall(logoutCallback);

    if (error) throw new Error(error.message);

    return data;
  },
};

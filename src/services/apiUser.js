import { safeApiCall } from "../utils/requestWrapper";
import { axiosInstance } from "./axiosInstance";

export const userService = {
  updateProfile: async (payload) => {
    const { requestBody, userId } = payload;
    const updateProfile = () =>
      axiosInstance.patch(`/users/${userId}/profile`, requestBody);

    const { data, error } = await safeApiCall(updateProfile);

    if (error) throw new Error(error.message);

    return data;
  },

  updatePassword: async (payload) => {
    const { requestBody, id } = payload;

    const updatePassword = () =>
      axiosInstance.patch(`/users/${id}/password`, requestBody);

    const { data, error } = await safeApiCall(updatePassword);

    if (error) throw new Error(error.message);

    return data;
  },
};

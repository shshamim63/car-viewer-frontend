import { API_URL } from "../utils/constants";
import { safeApiCall } from "../utils/requestWrapper";
import { axiosInstance } from "./axiosInstance";

export const userService = {
  updateProfile: async (payload) => {
    const { requestBody, userId } = payload;
    const updateProfile = () =>
      axiosInstance.patch(`${API_URL}/users/${userId}/profile`, requestBody);

    const { data, error } = await safeApiCall(updateProfile);

    if (error) throw new Error(error.message);

    return data;
  },
};

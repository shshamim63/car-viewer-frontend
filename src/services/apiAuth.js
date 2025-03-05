import axios from "axios";
import { API_URL, TOKEN_TYPE } from "../utils/constants";
import { safeApiCall } from "../utils/requestWrapper";

export const loginAPi = async ({ email, password }) => {
  const requestBody = { email, password };

  const fetchProfile = () =>
    axios.post(`${API_URL}/auth/login`, requestBody, { withCredentials: true });

  const { data, error } = await safeApiCall(fetchProfile);

  if (error) throw new Error(error.message);

  return data;
};

export const getCurrentUser = async (accessToken) => {
  const fetchProfile = () =>
    axios.get(`${API_URL}/users/profile`, {
      headers: { Authorization: `${TOKEN_TYPE} ${accessToken}` },
    });

  const { data, error } = await safeApiCall(fetchProfile);

  if (error) throw new Error(error.message);

  return data;
};

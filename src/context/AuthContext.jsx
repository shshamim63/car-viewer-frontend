import { createContext, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { safeApiCall } from "../utils/requestWrapper";
import { API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentAccessToken, setCurrentAccessToken] = useState(null);

  const navigate = useNavigate();
  const refreshAccessToken = async () => {
    const getRefreshToken = () =>
      axios.post(`${API_URL}/auth/refresh`, {}, { withCredentials: true });

    const { data, error } = await safeApiCall(getRefreshToken);

    if (error) {
      navigate("/login", { replace: true });
      throw new Error(error.message);
    }

    setCurrentAccessToken(data.accessToken);
    delete data.accessToken;
    delete data.refreshToken;
    return data;
  };

  return (
    <AuthContext.Provider
      value={{ currentAccessToken, setCurrentAccessToken, refreshAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export { AuthContext, AuthProvider };

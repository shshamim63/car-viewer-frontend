import { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { axiosInstance } from "../services/axiosInstance";

import { authService } from "../services/apiAuth";

const AuthContext = createContext({
  accessToken: null,
  setAccessToken: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const navigate = useNavigate();

  const logout = useCallback(() => {
    authService.logout().finally(() => {
      setAccessToken(null);
      navigate("/login", { replace: true });
    });
  }, [navigate]);

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (res) => res,
      async (err) => {
        const originalRequest = err.config;

        const isAuthRequest =
          originalRequest.url.includes("/auth/refresh") ||
          originalRequest.url.includes("/auth/logout") ||
          originalRequest._retry;
        if (err.response?.status === 401 && !isAuthRequest) {
          originalRequest._retry = true;
          try {
            const { accessToken: newAccessToken } = await authService.refresh();
            setAccessToken(newAccessToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest);
          } catch (refreshErr) {
            setAccessToken(null);
            return Promise.reject(refreshErr);
          }
        }

        return Promise.reject(err);
      }
    );

    return () => axiosInstance.interceptors.response.eject(interceptor);
  }, [logout]);

  useEffect(() => {
    authService
      .refresh()
      .then(({ accessToken }) => setAccessToken(accessToken))
      .catch(() => setAccessToken(null));
  }, [logout]);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, logout }}>
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

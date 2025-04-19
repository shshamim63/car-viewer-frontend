import { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { axiosInstance, setAxiosAccessToken } from "../services/axiosInstance";

import { authService } from "../services/apiAuth";

const AuthContext = createContext({
  accessToken: null,
  setAccessToken: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const navigate = useNavigate();

  const logout = useCallback(() => {
    authService.logout().finally(() => {
      setAccessToken(null);
      setAxiosAccessToken(null);
      setIsAuthLoading(false);
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
            setIsAuthLoading(true);
            const { accessToken: newAccessToken } = await authService.refresh();
            setAccessToken(newAccessToken);
            setAxiosAccessToken(newAccessToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            setIsAuthLoading(false);
            return axiosInstance(originalRequest);
          } catch (refreshErr) {
            setAccessToken(null);
            setAxiosAccessToken(null);
            setIsAuthLoading(false);
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
      .then(({ accessToken }) => {
        setAccessToken(accessToken);
        setAxiosAccessToken(accessToken);
        setIsAuthLoading(false);
      })
      .catch(() => {
        setAccessToken(null);
        setAxiosAccessToken(null);
        setIsAuthLoading(false);
      });
  }, [logout]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        logout,
        isAuthLoading,
        setIsAuthLoading,
      }}
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

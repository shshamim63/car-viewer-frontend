import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styled from "styled-components";

import Spinner from "./Spinner";

import { useAuth } from "../features/authentication/useAuth";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { currentAccessToken, refreshAccessToken } = useAuth();

  useEffect(() => {
    if (!currentAccessToken) {
      refreshAccessToken().then((newToken) => {
        if (!newToken) navigate("/login");
      });
    }
  }, [currentAccessToken, navigate, refreshAccessToken]);

  if (!currentAccessToken) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ProtectedRoute;

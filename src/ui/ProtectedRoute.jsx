import PropTypes from "prop-types";

import styled from "styled-components";

import Spinner from "./Spinner";

import { useAuth } from "../features/authentication/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) navigate("/login", { replace: true });
  }, [accessToken, navigate]);

  if (!accessToken) {
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

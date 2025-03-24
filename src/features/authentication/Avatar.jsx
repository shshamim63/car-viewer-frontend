import styled from "styled-components";
import PropTypes from "prop-types";

import { useUser } from "./useUser";

const StyledImage = styled.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

const Avatar = ({ onClick }) => {
  const { user } = useUser();

  if (!user) return;

  return <StyledImage onClick={onClick} src="default-user.png" alt="demo" />;
};

Avatar.propTypes = {
  onClick: PropTypes.func,
};

export default Avatar;

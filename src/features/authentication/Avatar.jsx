import styled from "styled-components";
import { useUser } from "./useUser";

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-600);
`;

const StyledImage = styled.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

const Avatar = () => {
  const { user } = useUser();

  if (!user) return;

  const { firstName, lastName } = user;

  const fullName =
    firstName && lastName ? firstName + " " + lastName : "Username Missing";

  return (
    <StyledAvatar>
      <StyledImage src="default-user.png" alt="demo" />
      <span>{fullName}</span>
    </StyledAvatar>
  );
};

export default Avatar;

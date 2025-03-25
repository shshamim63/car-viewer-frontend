import styled from "styled-components";
import Avatar from "../features/authentication/Avatar";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

const StyledHeader = styled.header`
  display: flex;
  gap: 0.4rem;
  justify-content: flex-end;
  padding: 1.2rem 2.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  align-items: center;
  background-color: var(--color-grey-0);
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHeaderMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <StyledHeader>
        <Avatar onClick={toggleHeaderMenu} />
      </StyledHeader>
      {isOpen && (
        <>
          <HeaderMenu onClick={setIsOpen} />
        </>
      )}
    </>
  );
};

export default Header;

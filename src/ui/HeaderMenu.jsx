import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { HiOutlineUser } from "react-icons/hi2";
import styled from "styled-components";

import ButtonIcon from "./ButtonIcon";
import Logout from "../features/authentication/Logout";

import { useUser } from "../features/authentication/useUser";
import { MdCancel } from "react-icons/md";

const StyledHeaderMenu = styled.ul`
  position: absolute;
  right: 4.8rem;
  margin-top: 4.8rem;
  width: 12rem;
  background: var(--color-grey-0);
  box-shadow: 0px 4px 6px rgb(0, 0, 0, 1.2);
  border-radius: 0.5rem;
  padding: 0%.5rem 0;
`;

const HeaderItem = styled.li`
  display: flex;
  width: 100%;
  text-align: right;
  padding: 0%.5rem 1rem;
  background: transparent;
  margin-top: 0.5rem;
  border: none;
  cursor: pointer;
  &:hover {
    background: #f3f4f6;
  }
`;

const Username = styled.span`
  margin-top: 1rem;
  color: var(--color-grey-600);
  text-align: center;
  width: 100%;
`;

const HeaderCancelContainer = styled.div`
  float: right;
  margin-top: 0.2rem;
`;

const HeaderMenu = ({ onClick }) => {
  const navigate = useNavigate();
  const { user } = useUser();

  const { firstName, lastName } = user;

  const fullName = firstName && lastName ? firstName + " " + lastName : "";

  return (
    <StyledHeaderMenu>
      <HeaderCancelContainer onClick={() => onClick(false)}>
        <MdCancel />
      </HeaderCancelContainer>
      {fullName && (
        <HeaderItem>
          <Username>{fullName}</Username>
        </HeaderItem>
      )}
      <HeaderItem onClick={() => navigate("/profile")}>
        <ButtonIcon>
          <HiOutlineUser />
        </ButtonIcon>
        <span>Profile</span>
      </HeaderItem>
      <HeaderItem>
        <Logout />
      </HeaderItem>
    </StyledHeaderMenu>
  );
};

HeaderMenu.propTypes = {
  onClick: PropTypes.func,
};

export default HeaderMenu;

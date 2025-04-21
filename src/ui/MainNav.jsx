import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { HiOutlineHome } from "react-icons/hi2";
import { FaTasks } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { APP_ROUTE } from "../utils/paths";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &:active.link,
  &:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to={APP_ROUTE.HOME}>
            {" "}
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={APP_ROUTE.TASKS}>
            <FaTasks />
            <span>Tasks</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={APP_ROUTE.ENTERPRISE}>
            <GoOrganization />
            <span>Enterprises</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={APP_ROUTE.DESIGNATION}>
            <BiSolidShoppingBagAlt />
            <span>Designations</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={APP_ROUTE.DEPARTMENTS}>
            <MdOutlineLocalFireDepartment />
            <span>Departments</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;

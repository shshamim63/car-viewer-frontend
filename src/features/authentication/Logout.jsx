import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogout } from "./useLogout";
import styled from "styled-components";

const LogoutStyledContainer = styled.div`
  display: flex;
`;

const Logout = () => {
  const { logout, isLoading } = useLogout();

  return (
    <LogoutStyledContainer disabled={isLoading} onClick={logout}>
      <ButtonIcon>
        {isLoading ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
      </ButtonIcon>
      {!isLoading && <span>Logout</span>}
    </LogoutStyledContainer>
  );
};

export default Logout;

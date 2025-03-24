import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogout } from "./useLogout";

const Logout = () => {
  const { logout, isLoading } = useLogout();

  return (
    <>
      <ButtonIcon disabled={isLoading} onClick={logout}>
        {isLoading ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
      </ButtonIcon>
      <span>Logout</span>
    </>
  );
};

export default Logout;

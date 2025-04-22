import PropTypes from "prop-types";

import { Avatar } from "@mui/material";

import { useUser } from "./useUser";

const UserAvatar = ({ onClick }) => {
  const { user } = useUser();

  if (!user) return;

  return <Avatar onClick={onClick} src="default-user.png" alt="demo" />;
};

UserAvatar.propTypes = {
  onClick: PropTypes.func,
};

export default UserAvatar;

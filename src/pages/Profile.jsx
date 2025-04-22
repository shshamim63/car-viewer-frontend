import { Typography } from "@mui/material";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserForm from "../features/authentication/UpdateUserForm";

import Row from "../ui/Row";

const Profile = () => {
  return (
    <>
      <Typography variant="h1">Update your account</Typography>
      <Row>
        <Typography variant="h3">Update user data</Typography>
        <UpdateUserForm />
      </Row>
      <Row>
        <Typography variant="h3">Update your password</Typography>
        <UpdatePasswordForm />
      </Row>
    </>
  );
};

export default Profile;

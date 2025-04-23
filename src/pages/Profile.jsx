import { Stack, Typography } from "@mui/material";

import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserForm from "../features/authentication/UpdateUserForm";
import FormLayout from "../ui/FormLayout";

const Profile = () => {
  return (
    <>
      <Typography variant="h4">Update your account</Typography>
      <Stack>
        <Typography variant="h5">Update user information</Typography>
        <FormLayout>
          <UpdateUserForm />
        </FormLayout>
      </Stack>
      <Stack>
        <Typography variant="h5">Update your password</Typography>
        <FormLayout>
          <UpdatePasswordForm />
        </FormLayout>
      </Stack>
    </>
  );
};

export default Profile;

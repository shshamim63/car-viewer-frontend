import { Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { useUser } from "./useUser";
import { useUpdateProfile } from "./useUpdateProfile";

import Form from "../../ui/Form";
import InputField from "../../ui/InputField";
import SpinnerMini from "../../ui/SpinnerMini";

const UpdateUserForm = () => {
  const { user, isLoading } = useUser();
  const { updateUserProfile, isUpdating } = useUpdateProfile();
  const { register, handleSubmit, reset } = useForm();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (user) {
      const { email, firstName, lastName, username } = user;
      reset({ email, firstName, lastName, username });
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    if (user?.id) {
      updateUserProfile({
        requestBody: {
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
        },
        userId: user.id,
      });
    }
  };

  const resetForm = () => {
    if (user) {
      const { email, firstName, lastName, username } = user;
      reset({ email, firstName, lastName, username });
    }
  };

  if (isLoading || isUpdating) return <SpinnerMini />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <InputField
          label="Email Address"
          id="email"
          value={user?.email || ""}
          register={register}
          disabled={true}
        />
        <InputField
          label="First Name"
          id="firstName"
          value={user?.firstName || ""}
          register={register}
          disabled={false}
        />
        <InputField
          label="Last Name"
          id="lastName"
          value={user?.lastName || ""}
          register={register}
          disabled={false}
        />
        <InputField
          label="Username"
          id="username"
          value={user?.username || ""}
          register={register}
          disabled={false}
        />
      </Stack>
      <Stack
        direction={isSmallScreen ? "column-reverse" : "row"}
        spacing={isSmallScreen ? 2 : 0}
        justifyContent="space-between"
        sx={{ marginTop: "1rem" }}
      >
        <Button
          type="reset"
          variant="outlined"
          onClick={resetForm}
          disabled={isLoading || isUpdating}
        >
          Reset
        </Button>
        <Button type="submit" variant="contained" disabled={isUpdating}>
          Update Account
        </Button>
      </Stack>
    </Form>
  );
};

export default UpdateUserForm;

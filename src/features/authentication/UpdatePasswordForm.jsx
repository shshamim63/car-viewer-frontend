import { useForm } from "react-hook-form";

import {
  Button,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Form from "../../ui/Form";

import { useUpdatePassword } from "./useUpdatePassword";
import { useUser } from "./useUser";

const UpdatePasswordForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm();

  const { user, isLoading } = useUser();
  const { updateCurrentPassword, isUpdating } = useUpdatePassword();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const onSubmit = (data) => {
    if (user?.id) {
      const payload = { requestBody: data, id: user.id };
      updateCurrentPassword(payload);
      reset();
    }
  };

  const isCurrentlyLoading = isLoading || isUpdating;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          type="password"
          label="Current Password"
          id="currentPassword"
          {...register("currentPassword", {
            required: "Current Password is required",
          })}
          helperText={errors?.currentPassword?.message}
          error={!!errors?.currentPassword?.message}
        />
        <TextField
          type="password"
          label="New Password"
          id="newPassword"
          {...register("newPassword", {
            required: "New Password is required",
            validate: (value) =>
              getValues("currentPassword") === value ||
              "Current and new password is same",
          })}
          helperText={errors?.newPassword?.message}
          error={!!errors?.newPassword?.message}
        />
        <TextField
          type="password"
          label="Confirm New Password"
          id="confirmNewPassword"
          {...register("confirmNewPassword", {
            required: "Confirm New Password is required",
            validate: (value) =>
              getValues("newPassword") === value || "Should match New Password",
          })}
          error={!!errors?.confirmNewPassword?.message}
          helperText={errors?.confirmNewPassword?.message}
        />
        <Stack
          direction={isSmallScreen ? "column-reverse" : "row"}
          spacing={isSmallScreen ? 2 : 0}
          justifyContent="space-between"
          sx={{ marginTop: "1rem" }}
        >
          <Button type="reset" variant="outlined" onClick={() => reset()}>
            Reset
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={isCurrentlyLoading}
          >
            Update Password
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
};

export default UpdatePasswordForm;

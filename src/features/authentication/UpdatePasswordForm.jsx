import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
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
      <FormRow
        label="Current Password"
        error={errors?.currentPassword?.message}
      >
        <Input
          type="password"
          autoComplete="current-password"
          id="currentPassword"
          {...register("currentPassword", {
            required: "Current Password is required",
          })}
        />
      </FormRow>
      <FormRow label="New Password" error={errors?.newPassword?.message}>
        <Input
          type="password"
          id="newPassword"
          {...register("newPassword", { required: "New Password is required" })}
        />
      </FormRow>
      <FormRow
        label="Confirm New Password"
        error={errors?.confirmNewPassword?.message}
      >
        <Input
          type="password"
          id="confirmNewPassword"
          {...register("confirmNewPassword", {
            required: "Confirm New Password is required",
            validate: (value) =>
              getValues("newPassword") === value || "Should match New Password",
          })}
        />
      </FormRow>
      <FormRow>
        <Button type="reset" variation="secondary" onClick={() => reset()}>
          Reset
        </Button>
        <Button type="submit" disabled={isCurrentlyLoading}>
          Update Password
        </Button>
      </FormRow>
    </Form>
  );
};

export default UpdatePasswordForm;

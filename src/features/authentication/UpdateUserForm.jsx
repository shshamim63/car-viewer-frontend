import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useUser } from "./useUser";
import { useUpdateProfile } from "./useUpdateProfile";

const UpdateUserForm = () => {
  const { user, isLoading } = useUser();
  const { updateUserProfile, isUpdating } = useUpdateProfile();
  const { register, handleSubmit, reset } = useForm();

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

  if (isLoading || isUpdating) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email address">
        <Input
          type="email"
          id="email"
          disabled
          defaultValue={user?.email || ""}
          {...register("email")}
        />
      </FormRow>
      <FormRow label="First Name">
        <Input
          id="firstName"
          type="text"
          defaultValue={user?.firstName || ""}
          {...register("firstName")}
        />
      </FormRow>
      <FormRow label="Last Name">
        <Input
          id="lastName"
          type="text"
          defaultValue={user?.lastName || ""}
          {...register("lastName")}
        />
      </FormRow>
      <FormRow label="Username">
        <Input
          id="username"
          type="text"
          defaultValue={user?.username || ""}
          {...register("username")}
        />
      </FormRow>
      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          onClick={resetForm}
          disabled={isLoading || isUpdating}
        >
          Reset
        </Button>
        <Button type="submit" disabled={isUpdating}>
          Update Account
        </Button>
      </FormRow>
    </Form>
  );
};

export default UpdateUserForm;

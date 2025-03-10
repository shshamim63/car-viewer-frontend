import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { EMAIL_REGEX } from "../../utils/constants";
import Button from "../../ui/Button";
import { useSignup } from "./useSignup";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const { signup, isLoading } = useSignup();

  const onSubmit = (data) => {
    const { firstName, lastName, email, password, username, confirmPassword } =
      data;
    signup(
      { firstName, lastName, email, password, username, confirmPassword },
      { onSettled: reset }
    );
  };

  const resetForm = (e) => {
    reset();
    e.target.blur();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="First Name" error={errors?.firstName?.message}>
        <Input
          type="text"
          id="firstName"
          {...register("firstName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Last Name" error={errors?.lastName?.message}>
        <Input
          type="text"
          id="lastName"
          {...register("lastName", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Username" error={errors?.username?.message}>
        <Input
          type="text"
          id="username"
          {...register("username", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="email" error={errors?.email?.message}>
        <Input
          type="text"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address",
            },
          })}
        />
      </FormRow>
      <FormRow label="password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Password must contain at least 8 characters",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Confirm Password"
        error={errors?.confirmPassword?.message}
      >
        <Input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues("password") || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow orientation="vertical">
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={resetForm}
        >
          Clear
        </Button>
        <Button variation="primary" disabled={isLoading}>
          Submit
        </Button>
      </FormRow>
    </Form>
  );
};

export default SignupForm;

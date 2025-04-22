import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { useForm } from "react-hook-form";

import { Stack, TextField, Button, Typography, Link } from "@mui/material";

import { EMAIL_REGEX } from "../../utils/constants";

import { useSignup } from "./useSignup";

import Form from "../../ui/Form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitted, touchedFields },
    trigger,
    watch,
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

  const values = watch();

  const shouldShowError = (name) =>
    (isSubmitted || touchedFields?.[name]) && !!errors?.[name];

  const getErrorMessage = (name) =>
    isSubmitted || touchedFields?.[name] ? errors?.[name]?.message : "";

  useEffect(() => {
    const timeout = setTimeout(() => {
      trigger();
    }, 300);

    return () => clearTimeout(timeout);
  }, [values, trigger]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label="First Name"
          type="text"
          id="firstName"
          error={shouldShowError("firstName")}
          helperText={getErrorMessage("firstName")}
          {...register("firstName", { required: "This field is required" })}
        />
        <TextField
          label="Last Name"
          type="text"
          id="lastName"
          error={shouldShowError("lastName")}
          helperText={getErrorMessage("lastName")}
          {...register("lastName", { required: "This field is required" })}
        />
        <TextField
          label="Username"
          type="text"
          id="username"
          error={shouldShowError("username")}
          helperText={getErrorMessage("username")}
          {...register("username", { required: "This field is required" })}
        />
        <TextField
          label="Email"
          type="text"
          id="email"
          error={shouldShowError("email")}
          helperText={getErrorMessage("email")}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address",
            },
          })}
        />
        <TextField
          label="Password"
          type="password"
          id="password"
          error={shouldShowError("password")}
          helperText={getErrorMessage("password")}
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Password must contain at least 8 characters",
            },
          })}
        />
        <TextField
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          error={shouldShowError("confirmPassword")}
          helperText={getErrorMessage("confirmPassword")}
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues("password") || "Passwords need to match",
          })}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
      >
        <Button variant="outlined" onClick={resetForm}>
          Clear
        </Button>
        <Button variant="contained" type="submit" disabled={isLoading}>
          Submit
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop={2}
      >
        <Typography variant="body2">Already have an account?</Typography>
        <Link
          component={RouterLink}
          to="/login"
          sx={{
            marginLeft: 1,
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1rem",
          }}
        >
          Login
        </Link>
      </Stack>
    </Form>
  );
};

export default SignupForm;

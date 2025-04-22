import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Stack, TextField, Button, Typography, Link } from "@mui/material";

import { useLogin } from "./useLogin";

import Form from "../../ui/Form";
import SpinnerMini from "../../ui/SpinnerMini";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Stack spacing={3} sx={{ width: "100%" }}>
        <TextField
          label="Email"
          type="email"
          id="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          size="small"
        />
        <TextField
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          size="small"
        />
        <Stack spacing={1}>
          <Button type="submit" variant="contained" fullWidth>
            {isLoading ? <SpinnerMini /> : "Log In"}
          </Button>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginTop={2}
          >
            <Typography variant="body2">Not yet a member?</Typography>
            <Link
              component={RouterLink}
              to="/signup"
              sx={{
                marginLeft: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Signup
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Form>
  );
};

export default LoginForm;

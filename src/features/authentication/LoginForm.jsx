import { useState } from "react";
import Form from "../../ui/Form";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { Stack, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

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
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button type="submit" variant="outlined" fullWidth>
              Signup
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

export default LoginForm;

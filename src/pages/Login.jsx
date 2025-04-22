import { Grid, Typography } from "@mui/material";

import Logo from "../ui/Logo";

import LoginForm from "../features/authentication/LoginForm";

const Login = () => {
  return (
    <Grid
      component="main"
      container
      minHeight="100vh"
      justifyContent="center"
      alignContent="center"
    >
      <Grid>
        <Logo />
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign="center"
          marginTop="1rem"
          marginBottom="1rem"
        >
          Log in to your account
        </Typography>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;

import Logo from "../ui/Logo";

import SignupForm from "../features/authentication/SignupForm";
import { Grid, Typography } from "@mui/material";

const Signup = () => {
  const gridItemStyle = {
    width: "100%",
    maxWidth: "25rem",
    "@media (min-width: 600px)": {
      maxWidth: "40rem",
    },
    "@media (min-width: 1024px)": {
      maxWidth: "60rem",
    },
  };

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item sx={gridItemStyle}>
        <Logo />
      </Grid>
      <Grid item sx={gridItemStyle}>
        <Typography variant="h4" component="h4" textAlign="center">
          {" "}
          Create Your account
        </Typography>
      </Grid>
      <Grid item sx={gridItemStyle}>
        <SignupForm />
      </Grid>
    </Grid>
  );
};

export default Signup;

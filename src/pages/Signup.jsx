import styled from "styled-components";
import Logo from "../ui/Logo";

import SignupForm from "../features/authentication/SignupForm";
import { Typography } from "@mui/material";

const SignupLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 60rem;
  background-color: var(--color-grey-100);
  align-content: center;
  justify-content: center;
`;

const Signup = () => {
  return (
    <SignupLayout>
      <Logo />
      <Typography variant="h4"> Create Your account</Typography>
      <SignupForm />
    </SignupLayout>
  );
};

export default Signup;

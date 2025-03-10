import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

import SignupForm from "../features/authentication/SignupForm";

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
      <Heading as="h4" type="h4">
        {" "}
        Create Your account
      </Heading>
      <SignupForm />
    </SignupLayout>
  );
};

export default Signup;

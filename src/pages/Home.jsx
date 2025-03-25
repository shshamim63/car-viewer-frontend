import { useUser } from "../features/authentication/useUser";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Home = () => {
  const { user } = useUser();

  return (
    <Row type={user?.active ? "horizontal" : "vertical"}>
      <Heading as="h1">Home</Heading>
      {!user?.active && (
        <Heading as="h4">
          Please inform your employer to activate your account.
        </Heading>
      )}
    </Row>
  );
};

export default Home;

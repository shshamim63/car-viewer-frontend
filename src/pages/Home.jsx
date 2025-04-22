import { Typography } from "@mui/material";
import { useUser } from "../features/authentication/useUser";

import Row from "../ui/Row";

const Home = () => {
  const { user } = useUser();

  return (
    <Row type={user?.active ? "horizontal" : "vertical"}>
      <Typography variant="h1">Home</Typography>
      {!user?.active && (
        <Typography variant="h4">
          Please inform your employer to activate your account.
        </Typography>
      )}
    </Row>
  );
};

export default Home;

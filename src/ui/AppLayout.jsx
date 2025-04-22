import { Outlet } from "react-router-dom";

import MainContainer from "./MainContainer";
import Container from "./Container";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Box } from "@mui/material";

function AppLayout() {
  return (
    <Box>
      <ResponsiveAppBar />
      <MainContainer>
        <Container>
          <Outlet />
        </Container>
      </MainContainer>
    </Box>
  );
}

export default AppLayout;

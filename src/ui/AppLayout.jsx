import { Outlet } from "react-router-dom";
import Header from "./Header";
import StyledAppLayout from "./StyledAppLayout";
import MainContainer from "./MainContainer";
import Container from "./Container";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <MainContainer>
        <Container>
          <Outlet />
        </Container>
      </MainContainer>
    </StyledAppLayout>
  );
}

export default AppLayout;

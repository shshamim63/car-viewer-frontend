import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import { APP_ROUTE } from "./utils/paths";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Profile from "./pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to={APP_ROUTE.HOME} />} />
            <Route path={APP_ROUTE.HOME} element={<Home />} />
            <Route path={APP_ROUTE.PROFILE} element={<Profile />} />
          </Route>
          <Route path={APP_ROUTE.LOGIN} element={<Login />} />
          <Route path={APP_ROUTE.SIGNUP} element={<Signup />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;

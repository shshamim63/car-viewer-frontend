import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./ui/ProtectedRoute";
import { APP_ROUTE } from "./utils/paths";
import AppLayout from "./ui/AppLayout";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Enterprises from "./pages/Enterprises";
import Departments from "./pages/Departments";
import Designations from "./pages/Designations";

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
            <Route path={APP_ROUTE.TASKS} element={<Tasks />} />
            <Route path={APP_ROUTE.ENTERPRISE} element={<Enterprises />} />
            <Route path={APP_ROUTE.DEPARTMENTS} element={<Departments />} />
            <Route path={APP_ROUTE.DESIGNATION} element={<Designations />} />
          </Route>
          <Route path={APP_ROUTE.LOGIN} element={<Login />} />
          <Route path={APP_ROUTE.SIGNUP} element={<Signup />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;

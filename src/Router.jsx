import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import { APP_ROUTE } from "./utils/paths";
import Signup from "./pages/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute></ProtectedRoute>}>
          <Route index element={<Navigate replace to={APP_ROUTE.HOME} />} />
          <Route path={APP_ROUTE.HOME} element={<Home />} />
        </Route>
        <Route path={APP_ROUTE.LOGIN} element={<Login />} />
        <Route path={APP_ROUTE.SIGNUP} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

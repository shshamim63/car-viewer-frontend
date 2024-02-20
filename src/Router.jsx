import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Navigate replace to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path element={<Login />} />
    </Routes>
  );
};

export default Router;

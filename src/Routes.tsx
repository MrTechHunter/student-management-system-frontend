import { Navigate, Outlet, Route, Routes as Router } from "react-router-dom";

import { useAuth } from "./contexts/AuthContext";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login";

type Props = {};

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};

const Routes = (props: Props) => {
  return (
    <Router>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Router>
  );
};

export default Routes;

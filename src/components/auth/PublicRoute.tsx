import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../auth/auth";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  if (isAuthenticated()) {
    return <Navigate to="/list" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;

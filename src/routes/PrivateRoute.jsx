import { useEffect } from "react";
import AuthStore from "../ZustandStore/AuthStore/AuthStore";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token, checkAuth } = AuthStore();
  const location = useLocation();

  useEffect(() => {
    checkAuth(); 
  }, []);

  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;

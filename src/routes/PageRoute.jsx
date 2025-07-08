import { Route ,Routes } from "react-router-dom";
import Landingpage from "../page/LandingPage/LandingPage";
import DashBoard from "../page/DashBoard/DashBoard";
import NotFoundPage from "@/page/NotFoundPage/NotFoundPage";
import ForgetPassword from "../page/ForgetPassword/ForgetPassword";
import PrivateRoute from "./PrivateRoute";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <DashBoard />
        </PrivateRoute>
      } />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default PageRoutes;

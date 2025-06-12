import { Route ,Routes } from "react-router-dom";
import Landingpage from "../page/LandingPage/LandingPage";
import DashBoard from "../page/DashBoard/DashBoard";
import NotFoundPage from "@/page/NotFoundPage/NotFoundPage";

const PageRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Landingpage/>}/>
    <Route path="dashboard" element={<DashBoard/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
   </Routes>
  )
}

export default PageRoutes;

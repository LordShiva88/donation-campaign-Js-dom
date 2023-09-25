import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/NavBar/Navbar";

const MainLayout = () => {
  return (
    <div className="p-4 lg:p-0">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};
export default MainLayout;

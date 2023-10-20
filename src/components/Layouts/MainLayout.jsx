import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navbar } from "../Common/Navbar/Navbar";


const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;

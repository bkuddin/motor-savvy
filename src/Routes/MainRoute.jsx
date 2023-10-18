import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import MainLayout from "../components/Layouts/MainLayout";
import MyCart from "../components/Pages/Cart/MyCart";
import Error from "../components/Pages/Error404/Error";
import Home from "../components/Pages/Home/Home";
import AddProduct from "../components/Pages/Product/AddProduct";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-products",
        element: <AddProduct />,
      },
      {
        path: "/cart",
        element: <MyCart/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
]);

export default MainRoute;

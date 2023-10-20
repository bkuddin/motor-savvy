import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import MainLayout from "../components/Layouts/MainLayout";
import MyCart from "../components/Pages/Cart/MyCart";
import Error from "../components/Pages/Error404/Error";
import Home from "../components/Pages/Home/Home";
import AddProduct from "../components/Pages/Product/AddProduct";
import BrandProductUpdate from "../components/Pages/Product/BrandProductUpdate";
import BrandProducts from "../components/Pages/Product/BrandProducts";
import ProductDetails from "../components/Pages/Product/ProductDetails";


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
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/brand-products/:brand_name",
        element: <BrandProducts/>,
        loader: ()=> fetch('http://localhost:5000/cars')
      },
      {
        path: "/product-update/:id",
        element: <BrandProductUpdate/>,
        loader: ({params})=> fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails/>,
        loader: ()=> fetch('http://localhost:5000/cars')
      },
      {
        path: "/cart",
        element: <MyCart/>,
        loader: ()=> fetch('http://localhost:5000/users')
      },
      {
        path: "/sign-in",
        element: <Login/>,
      },
      {
        path: "/sign-up",
        element: <Register/>,
      },
    ],
  },
]);

export default MainRoute;

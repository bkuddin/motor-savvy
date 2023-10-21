import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import MainRoute from "./Routes/MainRoute";
import AuthProvider from "./components/Auth/AuthProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoute} />
    </AuthProvider>
  </React.StrictMode>
);

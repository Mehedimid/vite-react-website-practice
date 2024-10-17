import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import WaterBottle from "./water bottle/WaterBottle";
import Navbar from "./Navbar/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/sign-up",
        element: <Register></Register>
      },
    ]
  },
  {
    path: "/countries",
    element: <>
    <Navbar></Navbar>
    <p>Hello Countries</p>
    </>,
  },
  {
    path: "/water-bottle",
    element: <WaterBottle></WaterBottle>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
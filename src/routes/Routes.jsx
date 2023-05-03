import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import ChefLayout from "../layouts/ChefLayout";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import ChefDetails from "../pages/ChefDetails/ChefDetails/ChefDetails";
import Chefs from "../pages/Home/Chefs/Chefs";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Shared/Blog/Blog";
import About from "../pages/Shared/About/About";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/chef" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ],
  },
  {
    path: "/chef",
    element: <Main />,
    children: [
      {
        path: "/chef",
        element: <Chefs />,
        loader: () => fetch("http://localhost:5000/chef"),
      },
    ],
  },
  {
    path: "/chef",
    element: <ChefLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
    ],
  },
]);

export default router;

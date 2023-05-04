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
import UserDetails from "../pages/UserDetails/UserDetails";
import FavoriteRecipe from "../pages/ChefDetails/FavoriteRecipe/FavoriteRecipe";

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
      },
      {
        path: "/user-details",
        element: <UserDetails />,
      },
      {
        path: "/favorite-recipe",
        element: (
          <PrivateRoute>
            <FavoriteRecipe />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/chef",
    element: <Main />,
    children: [
      {
        path: "/chef",
        element: <Chefs />,
        loader: () =>
          fetch(
            "https://chef-recipe-server-ass-10-masumbillah99.vercel.app/chef"
          ),
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
          fetch(
            `https://chef-recipe-server-ass-10-masumbillah99.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

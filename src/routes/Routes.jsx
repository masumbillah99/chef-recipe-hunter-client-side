import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import ChefLayout from "../layouts/ChefLayout";
import Main from "../layouts/Main";
import ChefDetails from "../pages/ChefDetails/ChefDetails/ChefDetails";
import Chefs from "../pages/Home/Chefs/Chefs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/chef" />,
      },
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
        element: <ChefDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
    ],
  },
]);

export default router;

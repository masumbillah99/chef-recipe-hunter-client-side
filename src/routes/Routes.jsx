import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import Chefs from "../pages/Home/Chefs/Chefs";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/chef"),
        element: <Chefs />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "./pages/Root";
import { HomePage } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to={"/home"} />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
]);

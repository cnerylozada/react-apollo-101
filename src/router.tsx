import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "./pages/Root";
import { AllAuthorsPage } from "./pages/AllAuthors";
import { BookDetailPage } from "./pages/BookDetail";
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
      {
        path: "all-authors",
        element: <AllAuthorsPage />,
      },
      {
        path: "authors/:authorId/books/:bookId",
        element: <BookDetailPage />,
      },
    ],
  },
]);

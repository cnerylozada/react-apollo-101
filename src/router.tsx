import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "./pages/Root";
import { AllAuthorsPage } from "./pages/AllAuthors";
import { BookDetailPage } from "./pages/BookDetail";
import { HomePage } from "./pages/Home";
import { AllBooksPage } from "./pages/AllBooks";
import { CreateAuthorPage } from "./pages/CreateAuthorPage";

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
        path: "all-authors/create",
        element: <CreateAuthorPage />,
      },
      {
        path: "all-books",
        element: <AllBooksPage />,
      },
      {
        path: "authors/:authorId/books/:bookId",
        element: <BookDetailPage />,
      },
    ],
  },
]);

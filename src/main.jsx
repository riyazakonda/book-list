import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Roote/Root";
import ErrorPages from "./components/ErrorPages/ErrorPages";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import BookDetails from "./components/BookDetails/BookDetails";
import ListedBook from "./components/ListedBook/ListedBook";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/booksData.json"),
      },

      {
        path: "listedBook",
        element: <ListedBook></ListedBook>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);

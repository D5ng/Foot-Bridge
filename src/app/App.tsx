import { createBrowserRouter, RouterProvider } from "react-router";
import { MatchListPage } from "../pages";
import "./styles/global.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: MatchListPage,
    },
  ]);
  return <RouterProvider router={router} />;
}

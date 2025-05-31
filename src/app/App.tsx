import { createBrowserRouter, RouterProvider } from "react-router";
import { MatchList } from "../pages";
import "./styles/global.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: MatchList,
    },
  ]);
  return <RouterProvider router={router} />;
}

import { createBrowserRouter, RouterProvider } from "react-router"
import { useEffect } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { useAuthStore } from "@/shared/stores/authStore"
import { queryClient } from "@/shared/lib/queryClient"
import { CreateTeamPage, LoginPage, MatchListPage, MyPage } from "../pages"
import "./styles/global.css"
import ProtectedRoute from "./providers/ProtectedRoute"

export default function App() {
  const { initialize } = useAuthStore()

  useEffect(() => {
    initialize()
  }, [initialize])

  const router = createBrowserRouter([
    {
      path: "/",
      Component: MatchListPage,
    },
    {
      path: "/login",
      Component: LoginPage,
    },
    {
      path: "/my",
      Component: () => (
        <ProtectedRoute fallback={<div>Loading...</div>}>
          <MyPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/create-team",
      Component: CreateTeamPage,
    },
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

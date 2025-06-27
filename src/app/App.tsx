import { useEffect } from "react"
import { RouterProvider } from "react-router"
import { QueryClientProvider } from "@tanstack/react-query"
import { useAuthStore } from "@/shared/stores/authStore"
import { queryClient } from "@/shared/lib"
import "./styles/global.css"
import { router } from "./routes"

export default function App() {
  const { initialize } = useAuthStore()

  useEffect(() => {
    initialize()
  }, [initialize])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

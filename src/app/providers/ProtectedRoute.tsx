import { useEffect, type PropsWithChildren } from "react"
import { useNavigate } from "react-router"
import { useAuthStore } from "@/shared/stores/authStore"

interface Props extends PropsWithChildren {
  fallback: React.ReactNode
  redirectTo?: string
}

export default function ProtectedRoute({ children, redirectTo = "/login", fallback }: Props) {
  const { isAuthenticated, isInitialized, isLoading } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (isInitialized && !isLoading && !isAuthenticated) {
      navigate(redirectTo, { replace: true })
    }
  }, [isInitialized, isLoading, isAuthenticated, navigate, redirectTo])

  if (!isInitialized || isLoading) {
    return <>{fallback}</>
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return null
}

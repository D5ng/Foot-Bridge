import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { useTeamByOwnerId } from "@/entities/team"
import { useAuthStore } from "@/shared/stores/authStore"
import CreateTeamFunnel from "../form/CreateTeamFunnel"
import CreateTeamSkeleton from "../skeleton/CreateTeamSkeleton"

export default function CreateTeamGuard() {
  const { user } = useAuthStore()
  const { data: team } = useTeamByOwnerId(user?.id ?? "")

  if (team) {
    throw new Error("팀 정보가 이미 존재합니다.")
  }

  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<CreateTeamSkeleton />}>
        <CreateTeamFunnel />
      </Suspense>
    </ErrorBoundary>
  )
}

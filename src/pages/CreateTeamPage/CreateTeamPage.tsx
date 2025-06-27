import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { TeamExistsFallback, CreateTeamGuard, CreateTeamSkeleton } from "@/features/createTeam/ui"

export default function CreateTeamPage() {
  return (
    <ErrorBoundary fallback={<TeamExistsFallback />}>
      <Suspense fallback={<CreateTeamSkeleton />}>
        <CreateTeamGuard />
      </Suspense>
    </ErrorBoundary>
  )
}

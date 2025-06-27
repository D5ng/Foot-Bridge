import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { CreateTeamErrorFallback, CreateTeamGuard } from "@/features/createTeam/ui"

export default function CreateTeamPage() {
  return (
    <ErrorBoundary fallback={<CreateTeamErrorFallback />}>
      <Suspense fallback={<div>Loading...</div>}>
        <CreateTeamGuard />
      </Suspense>
    </ErrorBoundary>
  )
}

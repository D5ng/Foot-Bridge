import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { CreateMatchGuard, NoTeamFallback, CreateMatchSkeleton } from "@/features/createMatch/ui"

export default function CreateMatchPage() {
  return (
    <ErrorBoundary fallback={<NoTeamFallback />}>
      <Suspense fallback={<CreateMatchSkeleton />}>
        <CreateMatchGuard />
      </Suspense>
    </ErrorBoundary>
  )
}

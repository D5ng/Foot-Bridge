import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import CreateTeamFunnel from "@/features/createTeam/ui/form/CreateTeamFunnel"

export default function CreateTeamPage() {
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <CreateTeamFunnel />
      </Suspense>
    </ErrorBoundary>
  )
}

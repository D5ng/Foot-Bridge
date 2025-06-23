import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { CreateMatchFunnel } from "@/features/createMatch/ui"

export default function CreateMatchPage() {
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <CreateMatchFunnel />
      </Suspense>
    </ErrorBoundary>
  )
}

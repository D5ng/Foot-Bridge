import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { CreateMatchFunnel } from "@/features/createMatch/ui"
import { ErrorFallback } from "@/shared/ui"

export default function CreateMatchPage() {
  return (
    <ErrorBoundary
      fallback={
        <ErrorFallback
          title="팀 정보를 불러오는데 실패했어요."
          errorMessage="팀 정보를 불러오는데 실패했어요. 잠시 후 다시 시도해 주시기 바랍니다."
        />
      }
    >
      <Suspense fallback={<div>Loading...</div>}>
        <CreateMatchFunnel />
      </Suspense>
    </ErrorBoundary>
  )
}

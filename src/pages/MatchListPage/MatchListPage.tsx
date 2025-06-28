import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react"
import { useQueryErrorResetBoundary } from "@tanstack/react-query"
import {
  MatchListBanner,
  MatchList,
  CreateMatchButton,
  MatchListSkeleton,
  MatchListErrorFallback,
} from "@/features/matchList/ui"
import { Header, MonthlyCalendar } from "@/shared/ui"

export default function MatchListPage() {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <>
      <Header />
      <main>
        <MatchListBanner />
        <MonthlyCalendar />
        <CreateMatchButton />
        <ErrorBoundary
          onReset={reset}
          FallbackComponent={({ resetErrorBoundary }) => {
            return <MatchListErrorFallback resetErrorBoundary={resetErrorBoundary} />
          }}
        >
          <Suspense fallback={<MatchListSkeleton />}>
            <MatchList />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  )
}

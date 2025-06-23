import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react"
import { MatchListBanner, MatchList, CreateMatchButton } from "@/features/matchList/ui"
import { Header, MonthlyCalendar } from "@/shared/ui"

export default function MatchListPage() {
  return (
    <>
      <Header />
      <main>
        <MatchListBanner />
        <MonthlyCalendar />
        <CreateMatchButton />
        <ErrorBoundary fallback={<div>Error</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <MatchList />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  )
}

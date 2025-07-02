import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react"
import { useQueryErrorResetBoundary } from "@tanstack/react-query"
import { format, parse } from "date-fns"
import { useSearchParams } from "react-router"
import {
  MatchListBanner,
  MatchList,
  CreateMatchButton,
  MatchListSkeleton,
  MatchListErrorFallback,
} from "@/features/matchList/ui"
import { Header, MonthlyCalendar } from "@/shared/ui"
import { useSelectedDate } from "@/features/matchList/models"

export default function MatchListPage() {
  const [searchParams] = useSearchParams()

  const initialDate = searchParams.get("day")
    ? parse(searchParams.get("day")!, "dd", new Date())
    : parse(format(new Date(), "yyyy-MM-dd"), "yyyy-MM-dd", new Date())

  const { selectedDate, selectedDateChange } = useSelectedDate({ initialDate })
  const { reset } = useQueryErrorResetBoundary()
  const selectedDay = format(selectedDate, "dd")

  return (
    <>
      <Header />
      <main>
        <MatchListBanner />
        <MonthlyCalendar defaultValue={selectedDate} onValueChange={selectedDateChange} />
        <CreateMatchButton />
        <ErrorBoundary
          onReset={reset}
          FallbackComponent={({ resetErrorBoundary }) => {
            return <MatchListErrorFallback resetErrorBoundary={resetErrorBoundary} />
          }}
        >
          <Suspense fallback={<MatchListSkeleton />}>
            <MatchList selectedDay={selectedDay} />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  )
}

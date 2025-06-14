import { MatchListBanner, MatchList } from "@/features/matchList/ui"
import { Header, MonthlyCalendar } from "@/shared/ui"

export default function MatchListPage() {
  return (
    <>
      <Header />
      <main>
        <MatchListBanner />
        <MonthlyCalendar />
        <MatchList />
      </main>
    </>
  )
}

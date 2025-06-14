import MatchListBanner from "@/features/matchList/ui/MathchListBanner/MatchListBanner"
import MatchList from "@/features/matchList/ui/MatchList/MatchList"
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

import Banner from "@/features/matchList/ui/MathchListBanner/MathchListBanner"
import MatchList from "@/features/matchList/ui/MatchList/MatchList"
import { Header, MonthlyCalendar } from "@/shared/ui"

export default function MatchListPage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <MonthlyCalendar />
        <MatchList />
      </main>
    </>
  )
}

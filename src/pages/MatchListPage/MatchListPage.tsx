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
        <MatchList />
      </main>
    </>
  )
}

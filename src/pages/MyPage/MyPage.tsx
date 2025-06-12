import { Header } from "@/shared/ui"
import { ProfileAvatar, AccountActions } from "@/features/myPage/ui"

export default function MyPage() {
  return (
    <>
      <Header />
      <main>
        <ProfileAvatar />
        <AccountActions />
      </main>
    </>
  )
}

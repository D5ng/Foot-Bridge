import ProfileAvatar from "@/features/myPage/ui/ProfileAvatar/ProfileAvatar"
import AccountActions from "@/features/myPage/ui/AccountActions/AccountActions"
import { Header } from "@/shared/ui"

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

import { useAuthStore } from "@/shared/stores/authStore"
import AccountActionItem from "./AccountActionItem"
import { accountActionsWrapper } from "./AccountActions.css"

interface ActionItem {
  id: string
  label: string
  type: "link" | "action"
  href?: string
  onClick?: () => void | Promise<void>
}

export default function AccountActions() {
  const { signOut } = useAuthStore()

  const handleLogout = async () => {
    const confirmed = confirm("로그아웃 하시겠습니까?")
    if (!confirmed) return

    try {
      await signOut()
    } catch (error) {
      console.error("Logout failed:", error)
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.")
    }
  }

  const actionItems: ActionItem[] = [
    {
      id: "team-edit",
      label: "팀 정보 수정",
      type: "link",
      href: "/team/edit",
    },
    {
      id: "account-delete",
      label: "회원 탈퇴하기",
      type: "link",
      href: "/account/delete",
    },
    {
      id: "logout",
      label: "로그아웃",
      type: "action",
      onClick: handleLogout,
    },
  ]

  return (
    <div>
      <ul className={accountActionsWrapper}>
        {actionItems.map((item) => (
          <AccountActionItem key={item.id} {...item}>
            {item.label}
          </AccountActionItem>
        ))}
      </ul>
    </div>
  )
}

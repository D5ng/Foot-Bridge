import type { ReactNode } from "react"
import { Link } from "react-router"
import { ArrowIcon } from "@/shared/ui/icons"
import { colorVars } from "@/shared/tokens"
import { accountActionItem } from "./AccountActionItem.css"

interface Props {
  children: ReactNode
  type: "link" | "action"
  href?: string
  onClick?: () => void | Promise<void>
}

export default function AccountActionItem({ children, type, href, onClick }: Props) {
  const content = (
    <>
      <span>{children}</span>
      <ArrowIcon decorative size={14} color={colorVars.neutral.dark[500]} />
    </>
  )

  if (type === "link" && href) {
    return (
      <li>
        <Link className={accountActionItem} to={href}>
          {content}
        </Link>
      </li>
    )
  }

  if (type === "action" && onClick) {
    return (
      <li>
        <button onClick={onClick} className={accountActionItem}>
          {content}
        </button>
      </li>
    )
  }

  // 기본값 (에러 방지)
  return <li className={accountActionItem}>{content}</li>
}

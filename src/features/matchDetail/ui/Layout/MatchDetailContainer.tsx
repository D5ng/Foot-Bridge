import type { PropsWithChildren } from "react"
import clsx from "clsx"
import { matchDetailContainer } from "./MatchDetailContainer.css"

interface Props extends PropsWithChildren {
  className?: string
}

export default function MatchDetailContainer({ children, className }: Props) {
  return <section className={clsx(matchDetailContainer, className)}>{children}</section>
}

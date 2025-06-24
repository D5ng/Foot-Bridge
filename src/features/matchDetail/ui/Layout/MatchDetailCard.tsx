import type { PropsWithChildren } from "react"
import clsx from "clsx"
import { matchDetailCard, matchDetailCardTitle } from "./MatchDetailCard.css"

interface Props extends PropsWithChildren {
  className?: string
}

export function MatchDetailCard({ children, className }: Props) {
  return <div className={clsx(matchDetailCard, className)}>{children}</div>
}

export function MatchDetailCardTitle({ children, className }: Props) {
  return <h2 className={clsx(matchDetailCardTitle, className)}>{children}</h2>
}

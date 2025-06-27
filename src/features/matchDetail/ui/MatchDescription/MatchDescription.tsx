import type { Match } from "@/entities/match"
import { matchDescriptionContainer } from "./MatchDescription.css"

interface Props {
  description: Match["description"]
}

export default function MatchDescription({ description }: Props) {
  return <div className={matchDescriptionContainer}>{description}</div>
}

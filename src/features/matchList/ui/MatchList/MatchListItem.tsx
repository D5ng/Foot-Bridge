import { clsx } from "clsx"
import { Badge } from "@/shared/ui"
import type { Match } from "@/entities/match"
import {
  matchItemBadge,
  matchItemInfo,
  matchItemTime,
  matchItemTitle,
  matchItemlayout,
  matchItemTag,
  matchItemRight,
  matchItemTagItem,
  matchItemTagItemImage,
  matchItemImageStyle,
  matchItemBadgeStyle,
} from "./MatchListItem.css"

export default function MatchListItem({ match_time, field_name, match_format, teams, match_status }: Match) {
  const { team_name, emblem_url, team_level } = teams
  const status = (match_status as "pending" | "confirmed" | "cancelled") ?? "pending"

  return (
    <article className={matchItemlayout({ status })}>
      <div className={matchItemInfo}>
        <span className={matchItemTime}>{match_time}</span>
        <Badge className={clsx(matchItemBadgeStyle({ status }), matchItemBadge)}>{team_level}</Badge>
      </div>
      <div className={matchItemRight}>
        <h3 className={matchItemTitle}>{field_name}</h3>
        <ul className={matchItemTag}>
          <li className={matchItemTagItem}>
            <div className={matchItemTagItemImage}>
              <img src={emblem_url} alt="팀 로고" width={16} height={16} className={matchItemImageStyle({ status })} />
            </div>
            <span>{team_name}</span>
          </li>
          <li className={matchItemTagItem}>{match_format}</li>
        </ul>
      </div>
    </article>
  )
}

import { Badge } from "@/shared/ui"
import type { Match } from "@/entities/match"
import {
  matchItemInfo,
  matchItemTime,
  matchItemTitle,
  mathItemlayout,
  matchItemTag,
  matchItemRight,
  matchItemTagItem,
  matchItemBadge,
  matchItemTagItemImage,
} from "./MatchListItem.css"

export default function MatchListItem({ match_time, field_name, match_format, teams }: Match) {
  const { team_name, emblem_url, team_level } = teams
  return (
    <article className={mathItemlayout}>
      <div className={matchItemInfo}>
        <span className={matchItemTime}>{match_time}</span>
        <Badge className={matchItemBadge}>{team_level}</Badge>
      </div>
      <div className={matchItemRight}>
        <h3 className={matchItemTitle}>{field_name}</h3>
        <ul className={matchItemTag}>
          <li className={matchItemTagItem}>
            <div className={matchItemTagItemImage}>
              <img src={emblem_url} alt="팀 로고" width={16} height={16} />
            </div>
            <span>{team_name}</span>
          </li>
          <li className={matchItemTagItem}>{match_format}</li>
        </ul>
      </div>
    </article>
  )
}

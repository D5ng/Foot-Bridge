import { Badge } from "@/shared/ui"
import {
  matchItemInfo,
  matchItemTime,
  matchItemTitle,
  mathItemlayout,
  matchItemTag,
  matchItemRight,
  matchItemTagItem,
  matchItemBadge,
} from "./MatchListItem.css"

export default function MatchListItem() {
  return (
    <article className={mathItemlayout}>
      <div className={matchItemInfo}>
        <span className={matchItemTime}>18:00</span>
        <Badge className={matchItemBadge}>아마추어</Badge>
      </div>
      <div className={matchItemRight}>
        <h3 className={matchItemTitle}>위너스 매치 구합니다.</h3>
        <ul className={matchItemTag}>
          <li className={matchItemTagItem}>천안 위너스</li>
          <li className={matchItemTagItem}>천안FB</li>
          <li className={matchItemTagItem}>5vs5</li>
        </ul>
      </div>
    </article>
  )
}

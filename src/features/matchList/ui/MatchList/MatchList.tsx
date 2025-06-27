import { layout } from "./MatchList.css"
import MatchListItem from "./MatchListItem"

export default function MatchList() {
  return (
    <ul className={layout}>
      <li>
        <MatchListItem />
      </li>
      <li>
        <MatchListItem />
      </li>
      <li>
        <MatchListItem />
      </li>
    </ul>
  )
}

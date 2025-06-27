import { Link } from "react-router"
import { layout } from "./MatchList.css"
import MatchListItem from "./MatchListItem"
import { useFetchMatchList } from "../../models"

export default function MatchList() {
  const { data: matchList } = useFetchMatchList()

  return (
    <ul className={layout}>
      {matchList!.map((match) => (
        <li key={match.id}>
          <Link to={`/match/${match.id}`}>
            <MatchListItem {...match} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

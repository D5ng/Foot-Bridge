import { Link } from "react-router"
import { emptyMatchListButton, emptyMatchListContainer, emptyMatchListText, layout } from "./MatchList.css"
import MatchListItem from "./MatchListItem"
import { useFetchMatchList } from "../../models"
import CreateMatchButton from "../CreateMatchButton/CreateMatchButton"

export default function MatchList() {
  const { data: matchList } = useFetchMatchList()

  if (matchList?.length === 0) {
    return <EmptyMatchList />
  }

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

function EmptyMatchList() {
  return (
    <div className={layout}>
      <div className={emptyMatchListContainer}>
        <h4 className={emptyMatchListText}>아직 등록된 매치가 없어요. 첫 경기를 등록해보세요!</h4>
        <CreateMatchButton className={emptyMatchListButton} />
      </div>
    </div>
  )
}

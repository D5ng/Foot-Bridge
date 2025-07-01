import { useNavigate, useParams } from "react-router"
import { Button, NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui"
import { useAcceptMatchRequest, useMatchRequests, useRejectMatchRequest } from "@/entities/matchRequests"
import {
  matchRequestButtonContainer,
  matchRequestContainer,
  matchRequestItem,
  matchRequestItemContainer,
  matchRequestItemList,
  matchRequestItemValue,
} from "./MatchApplicantsPage.css"

export default function MatchApplicantsPage() {
  const navigate = useNavigate()
  const { matchId } = useParams()
  const { data: matchRequests } = useMatchRequests(matchId!)
  const { mutate: acceptMatchRequest } = useAcceptMatchRequest()
  const { mutate: rejectMatchRequest } = useRejectMatchRequest()

  if (!matchRequests) return null

  console.log(matchRequests)

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton onClick={() => navigate(-1)} />
        <NavigationBarTitle>신청 내역</NavigationBarTitle>
      </NavigationBar>
      <main className={matchRequestContainer}>
        {matchRequests.map((request) => (
          <article key={request.id} className={matchRequestItemContainer}>
            <ul className={matchRequestItemList}>
              <li className={matchRequestItem}>
                <span>팀명: </span>
                <span className={matchRequestItemValue}>{request.teams.team_name}</span>
              </li>
              <li className={matchRequestItem}>
                <span>레벨: </span>
                <span className={matchRequestItemValue}>{request.teams.team_level}</span>
              </li>
              <li className={matchRequestItem}>
                <span>평균 나이: </span>
                <span className={matchRequestItemValue}>{request.teams.average_age}</span>
              </li>
            </ul>
            <div className={matchRequestButtonContainer}>
              <Button variant="primary" size="small" onClick={() => acceptMatchRequest(request.id)}>
                수락
              </Button>
              <Button variant="terciary" size="small" onClick={() => rejectMatchRequest(request.id)}>
                거절
              </Button>
            </div>
          </article>
        ))}
      </main>
    </>
  )
}

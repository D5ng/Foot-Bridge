import { Link } from "react-router"
import { Button } from "@/shared/ui"
import type { MatchStatus } from "@/entities/match"
import { matchDetailRequestCount, matchDetailRequestCountValue } from "./OwnerActions.css"

interface Props {
  matchId: string
  matchRequestCount: number
  status: MatchStatus
}

export function OwnerActions({ matchId, matchRequestCount, status }: Props) {
  const isDisabled = status === "confirmed" || status === "cancelled"

  return (
    <>
      <p className={matchDetailRequestCount}>
        총 <span className={matchDetailRequestCountValue}>{matchRequestCount}팀</span>이 신청했어요
      </p>

      {isDisabled && <Button disabled={isDisabled}>이미 매칭이 완료되었어요</Button>}
      {!isDisabled && (
        <Button asChild>
          <Link to={`/match/${matchId}/request`}>신청 팀 확인하러 가기</Link>
        </Button>
      )}
    </>
  )
}

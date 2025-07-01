import type { MatchDetail } from "@/entities/match"
import { matchDetailButtonWrapper } from "./MatchRoleActions.css"
import { useMatchRoleActions } from "../../models"
import { ParticipantActions } from "./ParticipantActions"
import { OwnerActions } from "./OwnerActions"

interface Props {
  matchData: MatchDetail
  matchId: string
}

export default function MatchRoleActions({ matchData, matchId }: Props) {
  const { isOwner, requestCount, isPending, handleMatchApply } = useMatchRoleActions({ matchData, matchId })

  return (
    <div className={matchDetailButtonWrapper}>
      {isOwner ? (
        <OwnerActions matchId={matchId} matchRequestCount={requestCount} status={matchData.match_status} />
      ) : (
        <ParticipantActions handleMatchApply={handleMatchApply} isPending={isPending} status={matchData.match_status} />
      )}
    </div>
  )
}

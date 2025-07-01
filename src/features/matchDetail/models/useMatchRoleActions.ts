import type { MatchDetail } from "@/entities/match"
import { useAuthStore } from "@/shared/stores/authStore"
import { useTeamByOwnerId } from "@/entities/team"
import { useApplyToMatchMutation } from "./useApplyToMatchMutation"

interface Params {
  matchData: MatchDetail
  matchId: string
}

export function useMatchRoleActions({ matchData, matchId }: Params) {
  const { user } = useAuthStore()
  const { mutate: applyToMatch, isPending } = useApplyToMatchMutation()
  const { data: team } = useTeamByOwnerId(user!.id)

  const isOwner = matchData?.teams.owner_id === user?.id
  const requestCount = matchData.match_requests.length

  const handleMatchApply = () => {
    if (matchData.match_status === "confirmed" || matchData.match_status === "cancelled") {
      return
    }

    applyToMatch({ matchId, currentUserTeamId: team!.id })
  }

  return {
    isOwner,
    requestCount,
    applyToMatch,
    isPending,
    handleMatchApply,
  }
}

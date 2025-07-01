import { useMutation } from "@tanstack/react-query"
import { applyToMatch } from "@/entities/matchRequests"
import { queryClient } from "@/shared/lib"
import { matchRequestsKeys } from "@/entities/matchRequests/matchRequests.queryKeys"

interface UseApplyToMatchParams {
  matchId: string
  currentUserTeamId: string
}

export function useApplyToMatchMutation() {
  return useMutation({
    mutationFn: ({ matchId, currentUserTeamId }: UseApplyToMatchParams) => applyToMatch(matchId, currentUserTeamId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: matchRequestsKeys.all })
    },
  })
}

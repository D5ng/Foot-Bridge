import { useSuspenseQuery } from "@tanstack/react-query"
import { fetchTeamByOwnerId } from "./team.apis"
import { teamKeys } from "./team.queryKeys"

/** Query Hooks */
export function useTeamByOwnerId(userId: string) {
  return useSuspenseQuery({
    queryKey: teamKeys.detail(userId),
    queryFn: () => fetchTeamByOwnerId(userId),
  })
}

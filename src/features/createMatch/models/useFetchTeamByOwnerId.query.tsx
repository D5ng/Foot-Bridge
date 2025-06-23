import { useSuspenseQuery } from "@tanstack/react-query"
import { fetchTeamByOwnerId, teamKeys } from "@/entities/team"

export function useFetchTeamByOwnerId(userId: string) {
  return useSuspenseQuery({
    queryKey: teamKeys.detail(userId),
    queryFn: () => fetchTeamByOwnerId(userId),
  })
}

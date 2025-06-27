import { useQuery } from "@tanstack/react-query"
import { fetchMatchDetail, matchKeys } from "@/entities/match"

export function useMatchDetail(matchId: string) {
  return useQuery({
    queryKey: matchKeys.detail(matchId),
    queryFn: () => fetchMatchDetail(matchId),
  })
}

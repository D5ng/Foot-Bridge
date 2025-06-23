import { useSuspenseQuery } from "@tanstack/react-query"
import { fetchMatchList, matchKeys } from "@/entities/match"

export function useFetchMatchList() {
  return useSuspenseQuery({
    queryKey: matchKeys.list(),
    queryFn: fetchMatchList,
  })
}

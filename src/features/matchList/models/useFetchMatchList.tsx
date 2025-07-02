import { useSuspenseQuery } from "@tanstack/react-query"
import { getMatchList, matchKeys } from "@/entities/match"

export function useFetchMatchList(selectedDate: string) {
  return useSuspenseQuery({
    queryKey: matchKeys.list(selectedDate),
    queryFn: () => getMatchList(selectedDate),
  })
}

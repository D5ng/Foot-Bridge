import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createMatch, matchKeys, type CreateMatchDto } from "@/entities/match"

export function useCreateMatchMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateMatchDto) => createMatch(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: matchKeys.all })
    },
  })
}

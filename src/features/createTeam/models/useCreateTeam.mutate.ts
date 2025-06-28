import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTeam, teamKeys, type CreateTeamDto } from "@/entities/team"

export function useCreateTeam() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateTeamDto) => createTeam(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: teamKeys.all })
    },
  })
}

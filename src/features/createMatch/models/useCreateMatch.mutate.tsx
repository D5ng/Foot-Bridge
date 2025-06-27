import { useMutation } from "@tanstack/react-query"
import { createMatch, type CreateMatchDto } from "@/entities/match"

export function useCreateMatchMutation() {
  return useMutation({
    mutationFn: (data: CreateMatchDto) => createMatch(data),
    onSuccess: () => {
      console.log("매치 생성 완료")
    },
    onError: () => {
      console.log("매치 생성 실패")
    },
  })
}

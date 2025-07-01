import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { acceptMatchRequest, getMatchRequests, rejectMatchRequest } from "./matchRequests.apis"
import { matchRequestsKeys } from "./matchRequests.queryKeys"

export const useMatchRequests = (matchId: string) => {
  return useSuspenseQuery({
    queryKey: matchRequestsKeys.list(matchId),
    queryFn: () => getMatchRequests(matchId),
    select: (data) => data?.filter((request) => request.status === "pending"),
  })
}

export const useAcceptMatchRequest = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (requestId: string) => acceptMatchRequest(requestId),
    onSuccess: (data) => {
      console.log(data)
      queryClient.invalidateQueries({ queryKey: matchRequestsKeys.all })
    },
  })
}

export const useRejectMatchRequest = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (requestId: string) => rejectMatchRequest(requestId),
    onSuccess: (data) => {
      console.log(data)
      queryClient.invalidateQueries({ queryKey: matchRequestsKeys.all })
    },
  })
}

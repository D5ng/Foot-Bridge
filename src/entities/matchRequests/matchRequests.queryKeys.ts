export const matchRequestsKeys = {
  all: ["matchRequests"] as const,
  list: (matchId: string) => [...matchRequestsKeys.all, "list", matchId] as const,
}

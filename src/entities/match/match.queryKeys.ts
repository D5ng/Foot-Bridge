export const matchKeys = {
  all: ["matchList"] as const,
  list: () => [...matchKeys.all, "list"] as const,
  detail: (matchId: string) => [...matchKeys.all, "detail", matchId] as const,
}

export const matchKeys = {
  all: ["matchList"] as const,
  list: (selectedDate: string | number) => [...matchKeys.all, "list", selectedDate] as const,
  detail: (matchId: string) => [...matchKeys.all, "detail", matchId] as const,
}

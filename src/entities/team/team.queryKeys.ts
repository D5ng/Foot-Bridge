export const teamKeys = {
  all: ["team"] as const,
  detail: (id: string) => [...teamKeys.all, "detail", id] as const,
  create: () => [...teamKeys.all, "create"] as const,
}

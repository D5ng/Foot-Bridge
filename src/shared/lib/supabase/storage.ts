export const TEAM_EMBLEM_BUCKET = "team-emblems"

export const DEFAULT_EMBLEM_URL = `${
  import.meta.env.VITE_SUPABASE_URL
}/storage/v1/object/public/${TEAM_EMBLEM_BUCKET}/default-emblem.png`

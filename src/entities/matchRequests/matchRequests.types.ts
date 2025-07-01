import type { Database } from "@/shared/lib"

export type MatchRequest = Database["public"]["Tables"]["match_requests"]["Row"] & {
  teams: Database["public"]["Tables"]["teams"]["Row"]
}

export type ApplyToMatchPayload = Database["public"]["Tables"]["match_requests"]["Insert"]

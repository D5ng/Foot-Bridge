import { supabaseClient } from "@/shared/lib"
import type { CreateMatchDto, Match, MatchDetail } from "./match.types"

export async function fetchMatchList(): Promise<Match[] | null> {
  return (
    await supabaseClient
      .from("matches")
      .select("*, teams(*), match_requests(*, teams(*))")
      .order("match_time", { ascending: true })
  ).data
}

export async function createMatch(data: CreateMatchDto): Promise<CreateMatchDto | null> {
  return (await supabaseClient.from("matches").insert(data).select("*, teams(team_level)").single()).data
}

export async function fetchMatchDetail(matchId: string): Promise<MatchDetail | null> {
  return (
    await supabaseClient
      .from("matches")
      .select(
        `
        *,
        teams:team_id ( * ), 
        match_requests (
          *,
          teams:team_id ( * )
        )
        `
      )
      .eq("id", matchId)
      .single()
  ).data
}

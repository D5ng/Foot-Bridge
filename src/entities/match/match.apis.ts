import { format, parse } from "date-fns"
import { supabaseClient } from "@/shared/lib"
import type { CreateMatchDto, Match, MatchDetail } from "./match.types"

export async function getMatchList(selectedDate: string): Promise<Match[] | null> {
  const formattedDate = format(parse(selectedDate.toString(), "dd", new Date()), "yyyy-MM-dd")

  return (
    await supabaseClient
      .from("matches")
      .select("*, teams(*), match_requests(*, teams(*))")
      .eq("match_date", formattedDate)
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

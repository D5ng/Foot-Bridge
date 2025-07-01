/* eslint-disable no-console */
import { supabaseClient } from "@/shared/lib"
import type { ApplyToMatchPayload, MatchRequest } from "./matchRequests.types"

export async function applyToMatch(matchId: string, currentUserTeamId: string): Promise<ApplyToMatchPayload | null> {
  return (
    await supabaseClient
      .from("match_requests")
      .insert({ match_id: matchId, team_id: currentUserTeamId })
      .select()
      .single()
  ).data
}

export async function getMatchRequests(matchId: string): Promise<MatchRequest[] | null> {
  return (await supabaseClient.from("match_requests").select("*, teams(*)").eq("match_id", matchId)).data
}

export async function acceptMatchRequest(requestId: string) {
  const { data, error } = await supabaseClient
    .from("match_requests")
    .update({ status: "accepted", responded_at: new Date().toISOString() })
    .match({ id: requestId })
    .select()

  if (error) {
    console.error("Error accepting match request:", error)
    return null
  }

  const matchId = data[0].match_id
  const teamId = data[0].team_id

  const { error: matchError } = await supabaseClient
    .from("matches")
    .update({
      confirmed_team_id: teamId,
      match_status: "confirmed",
    })
    .match({ id: matchId })

  if (matchError) {
    console.error("Error updating match status:", matchError)
    return
  }
}

export async function rejectMatchRequest(requestId: string) {
  const { data, error } = await supabaseClient
    .from("match_requests")
    .update({ status: "rejected", responded_at: new Date().toISOString() })
    .match({ id: requestId })
    .select()

  if (error) {
    console.error("Error accepting match request:", error)
    return null
  }

  const matchId = data[0].match_id
  const teamId = data[0].team_id

  const { error: matchError } = await supabaseClient
    .from("matches")
    .update({
      match_status: "cancelled",
      confirmed_team_id: null,
    })
    .match({ id: matchId })

  if (matchError) {
    console.error("Error updating match status:", matchError)
    return
  }
}

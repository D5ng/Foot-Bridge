import type { z } from "zod"
import { supabase } from "@/shared/lib"
import { createTeamSchema } from "../ui/form/form.schema"

type CreateTeamSchema = z.infer<typeof createTeamSchema> & { owner_id: string }

export async function createTeam(data: CreateTeamSchema) {
  const { data: team, error } = await supabase
    .from("teams")
    .insert({
      team_name: data.teamName,
      team_leader_name: data.teamLeaderName,
      team_leader_phone: data.teamLeaderPhoneNumber,
      activity_days: data.teamActivityDays,
      match_times: data.matchTime,
      average_age: data.averageAge,
      skill_level: data.skillLevel,
      team_intro: data.teamIntro,
      emblem_url: data.emblem,
      owner_id: data.owner_id,
    })
    .select()
    .single()

  if (error) {
    throw error
  }

  return team
}

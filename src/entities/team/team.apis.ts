import { supabaseClient, TEAM_EMBLEM_BUCKET } from "@/shared/lib"
import type { CreateTeamDto, Team } from "./team.types"

export async function createTeam(team: CreateTeamDto): Promise<Team | null> {
  return (await supabaseClient.from("teams").insert(team).select().single()).data
}

export async function fetchTeamByOwnerId(userId: string): Promise<Team | null> {
  return (await supabaseClient.from("teams").select("*").eq("owner_id", userId).maybeSingle()).data
}

export async function uploadEmblem(file: File, teamId: string) {
  try {
    const fileExt = file.name.split(".").pop()
    const fileName = `${teamId}-${Date.now()}.${fileExt}`

    const { error: uploadError } = await supabaseClient.storage.from(TEAM_EMBLEM_BUCKET).upload(fileName, file, {
      cacheControl: "3600",
      upsert: true,
    })

    if (uploadError) {
      throw uploadError
    }

    const { data } = supabaseClient.storage.from(TEAM_EMBLEM_BUCKET).getPublicUrl(fileName)
    return data.publicUrl
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("이미지 업로드 실패:", error)
    throw error
  }
}

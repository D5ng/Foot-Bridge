import type { CreateTeamPayload } from "@/entities/team"

export function transformCreateTeamToDto(data: CreateTeamPayload & { owner_id: string }) {
  return {
    team_name: data.teamName,
    team_leader_name: data.teamLeaderName,
    team_leader_phone: data.teamLeaderPhoneNumber,
    activity_days: data.teamActivityDays,
    match_times: data.matchTime,
    average_age: data.averageAge,
    team_level: data.teamLevel,
    team_intro: data.teamIntro,
    emblem_url: data.emblem || "",
    owner_id: data.owner_id,
  }
}

export async function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      resolve(reader.result as string)
    }

    reader.onerror = () => {
      reject(new Error("Failed to read file as data url"))
    }

    reader.readAsDataURL(file)
  })
}

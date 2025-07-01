import { parse, format } from "date-fns"
import type { CreateMatchPayload } from "@/entities/match"

export function transformCreateMatchToDto(data: CreateMatchPayload & { teamId: string }) {
  return {
    match_date: data.matchDate,
    match_time: convertTimeTo24Hour(data.matchTime),
    field_name: data.fieldName,
    match_format: data.matchFormat,
    description: data.description,
    team_id: data.teamId,
  }
}

export function convertTimeTo24Hour(time: string): string {
  const hour = parseInt(time.replace(/[^0-9]/g, ""), 10)

  let adjustedHour = hour

  if (time.includes("오후") && hour !== 12) {
    adjustedHour += 12
  }

  if (time.includes("오전") && hour === 12) {
    adjustedHour = 0
  }

  const timeStr = `${adjustedHour.toString().padStart(2, "0")}:00`
  const parsed = parse(timeStr, "HH:mm", new Date())

  return format(parsed, "HH:mm")
}

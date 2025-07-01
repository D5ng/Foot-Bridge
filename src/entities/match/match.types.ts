import type { z } from "zod"
import type { Database } from "@/shared/lib"
import { REQUIRED_MODAL_TYPE } from "./match.consts"
import type { createMatchRequiredSchema } from "./match.shemas"

export type Match = Database["public"]["Tables"]["matches"]["Row"] & {
  teams: Database["public"]["Tables"]["teams"]["Row"]
}

export type MatchDetail = Database["public"]["Tables"]["matches"]["Row"] & {
  teams: Database["public"]["Tables"]["teams"]["Row"]
} & {
  match_requests: (Database["public"]["Tables"]["match_requests"]["Row"] & {
    teams: Database["public"]["Tables"]["teams"]["Row"]
  })[]
}

export type MatchStatus = Database["public"]["Enums"]["match_status_enum"]

export type CreateMatchDto = Database["public"]["Tables"]["matches"]["Insert"]

export type CreateMatchPayload = z.infer<typeof createMatchRequiredSchema>

export type RequiredModalType = (typeof REQUIRED_MODAL_TYPE)[keyof typeof REQUIRED_MODAL_TYPE]

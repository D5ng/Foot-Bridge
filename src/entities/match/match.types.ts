import type { z } from "zod"
import type { Database } from "@/shared/lib"
import type { createMatchRequiredSchema } from "./match.shemas"

export type Match = Database["public"]["Tables"]["matches"]["Row"] & {
  teams: Database["public"]["Tables"]["teams"]["Row"]
}

export type CreateMatchDto = Database["public"]["Tables"]["matches"]["Insert"]

export type CreateMatchPayload = z.infer<typeof createMatchRequiredSchema>

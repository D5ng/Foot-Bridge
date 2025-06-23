import type { z } from "zod"
import type { Database } from "@/shared/lib"
import type { createTeamRequiredSchema } from "./team.schemas"

export type Team = Database["public"]["Tables"]["teams"]["Row"]

export type CreateTeamDto = Database["public"]["Tables"]["teams"]["Insert"]

export type CreateTeamPayload = z.infer<typeof createTeamRequiredSchema>

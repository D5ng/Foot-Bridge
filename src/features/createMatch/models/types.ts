import type { z } from "zod"
import { FOOTBALL_FIELD_NAMES, MATCH_FORMAT_OPTIONS, MATCH_TIME_OPTIONS } from "@/entities/match"
import type { matchDateFormSchema, matchFormatFormSchema, matchDescriptionFormSchema } from "./schemas"

export type MatchTimeOption = (typeof MATCH_TIME_OPTIONS)[number]

export type FieldNameOption = (typeof FOOTBALL_FIELD_NAMES)[number]

export type MatchFormatOption = (typeof MATCH_FORMAT_OPTIONS)[number]

export type MatchDateFormContext = z.infer<typeof matchDateFormSchema>

export type MatchFormatFormContext = z.infer<typeof matchFormatFormSchema>

export type MatchDescriptionFormContext = z.infer<typeof matchDescriptionFormSchema>

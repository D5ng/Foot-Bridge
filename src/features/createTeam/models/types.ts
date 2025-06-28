import type { z } from "zod"
import { DAYS, MATCH_TIMES_OPTIONS, AVERAGE_AGE_OPTIONS, TEAM_LEVEL_OPTIONS } from "@/entities/team"
import type {
  teamBasicInfoFormSchema,
  teamActivityDaysFormSchema,
  teamActivityTimeFormSchema,
  teamAverageAgeFormSchema,
  teamLevelFormSchema,
  teamIntroFormSchema,
  teamUploadEmblemFormSchema,
} from "./schemas"

// Form Constants
export type Day = (typeof DAYS)[number]

export type MatchTimeOption = (typeof MATCH_TIMES_OPTIONS)[number]

export type AverageAgeOption = (typeof AVERAGE_AGE_OPTIONS)[number]

export type SkillLevelOption = (typeof TEAM_LEVEL_OPTIONS)[number]

// Form Schemas
export type TeamBasicInfoContext = z.infer<typeof teamBasicInfoFormSchema>

export type TeamActivityDaysContext = z.infer<typeof teamActivityDaysFormSchema>

export type TeamActivityTimeContext = z.infer<typeof teamActivityTimeFormSchema>

export type TeamAverageAgeContext = z.infer<typeof teamAverageAgeFormSchema>

export type TeamLevelContext = z.infer<typeof teamLevelFormSchema>

export type TeamIntroContext = z.infer<typeof teamIntroFormSchema>

export type TeamUploadEmblemContext = z.infer<typeof teamUploadEmblemFormSchema>

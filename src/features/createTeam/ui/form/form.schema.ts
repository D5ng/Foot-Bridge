import { z } from "zod"
import { DAYS, MATCH_TIMES_OPTIONS, AVERAGE_AGE_OPTIONS, SKILL_LEVEL_OPTIONS } from "./form.constants"

export const teamBasicInfoStepSchema = z.object({
  teamName: z.string(),
  teamLeaderName: z.string(),
  teamLeaderPhoneNumber: z.string(),
})

export const teamActivityDaysStepSchema = teamBasicInfoStepSchema.extend({
  teamActivityDays: z.array(z.enum(DAYS)),
})

export const matchTimeStepSchema = teamActivityDaysStepSchema.extend({
  matchTime: z.array(z.enum(MATCH_TIMES_OPTIONS)),
})

export const averageAgeStepSchema = matchTimeStepSchema.extend({
  averageAge: z.array(z.enum(AVERAGE_AGE_OPTIONS)),
})

export const skillLevelStepSchema = averageAgeStepSchema.extend({
  skillLevel: z.enum(SKILL_LEVEL_OPTIONS),
})

export const teamIntroStepSchema = skillLevelStepSchema.extend({
  teamIntro: z.string(),
})

export const uploadEmblemStepSchema = teamIntroStepSchema.extend({
  emblem: z.string(),
})

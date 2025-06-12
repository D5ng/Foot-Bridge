import { AVERAGE_AGE_OPTIONS, DAYS, MATCH_TIMES_OPTIONS, SKILL_LEVEL_OPTIONS } from "./form.constants"

export type Day = (typeof DAYS)[number]

export type MatchTimeOption = (typeof MATCH_TIMES_OPTIONS)[number]

export type AverageAgeOption = (typeof AVERAGE_AGE_OPTIONS)[number]

export type SkillLevelOption = (typeof SKILL_LEVEL_OPTIONS)[number]

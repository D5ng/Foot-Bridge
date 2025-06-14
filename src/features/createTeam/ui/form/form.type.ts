import type { z } from "zod"
import {
  DAYS,
  MATCH_TIMES_OPTIONS,
  AVERAGE_AGE_OPTIONS,
  SKILL_LEVEL_OPTIONS,
  FORM_FIELD_MAPPING,
} from "./form.constants"
import {
  type activityDaysFormSchema,
  type basicInfoFormSchema,
  type matchTimeFormSchema,
  type averageAgeFormSchema,
  type skillLevelFormSchema,
  type introFormSchema,
  type uploadEmblemFormSchema,
  completeFormSchema,
} from "./form.schema"

export type Day = (typeof DAYS)[number]
export type MatchTimeOption = (typeof MATCH_TIMES_OPTIONS)[number]
export type AverageAgeOption = (typeof AVERAGE_AGE_OPTIONS)[number]
export type SkillLevelOption = (typeof SKILL_LEVEL_OPTIONS)[number]

// FormSchema
export type BasicInfoContext = z.infer<typeof basicInfoFormSchema>

export type ActivityDaysContext = z.infer<typeof activityDaysFormSchema>

export type MatchTimeContext = z.infer<typeof matchTimeFormSchema>

export type AverageAgeContext = z.infer<typeof averageAgeFormSchema>

export type SkillLevelContext = z.infer<typeof skillLevelFormSchema>

export type IntroContext = z.infer<typeof introFormSchema>

export type UploadEmblemContext = z.infer<typeof uploadEmblemFormSchema>

export type CompleteContext = z.infer<typeof completeFormSchema>

// FormConstants
export type FormFieldKey = keyof typeof FORM_FIELD_MAPPING
export type FormFieldLabel = (typeof FORM_FIELD_MAPPING)[FormFieldKey]

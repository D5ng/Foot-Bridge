import { z } from "zod"
import { FOOTBALL_FIELD_NAMES, MATCH_FORMAT_OPTIONS, MATCH_TIME_OPTIONS } from "./match.consts"

/** Base Schema */
export const createMatchBaseSchema = z
  .object({
    matchDate: z.string().min(1, "날짜를 선택해주세요."),
    matchTime: z.enum(MATCH_TIME_OPTIONS),
    fieldName: z.enum(FOOTBALL_FIELD_NAMES),
    matchFormat: z.enum(MATCH_FORMAT_OPTIONS),
    description: z.string().min(1, "상세 내용을 입력해주세요.").max(1000, "최대 100자까지 입력할 수 있습니다."),
  })
  .partial()

/** Required Schema */
export const createMatchRequiredSchema = createMatchBaseSchema.required({
  matchDate: true,
  matchTime: true,
  fieldName: true,
  matchFormat: true,
  description: true,
})

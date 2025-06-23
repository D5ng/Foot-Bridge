import { z } from "zod"
import { DAYS, MATCH_TIMES_OPTIONS, AVERAGE_AGE_OPTIONS, TEAM_LEVEL_OPTIONS } from "./team.consts"

/** Base Schema */
export const createTeamBaseSchema = z
  .object({
    teamName: z
      .string()
      .min(2, "팀명은 2자 이상이어야 합니다.")
      .max(20, "팀명은 20자 이하여야 합니다.")
      .regex(/^[가-힣a-zA-Z0-9\s]+$/, "팀명은 한글, 영문, 숫자만 사용 가능합니다."),
    teamLeaderName: z
      .string()
      .min(2, "이름은 2자 이상이어야 합니다.")
      .max(10, "이름은 10자 이하여야 합니다.")
      .regex(/^[가-힣]+$/, "이름은 한글만 사용 가능합니다."),
    teamLeaderPhoneNumber: z
      .string()
      .regex(/^01[0-9]{8,9}$/, "올바른 휴대폰 번호를 입력해주세요.")
      .min(10, "휴대폰 번호는 10자리 이상이어야 합니다.")
      .max(11, "휴대폰 번호는 11자리 이하여야 합니다."),
    teamActivityDays: z
      .array(z.enum(DAYS))
      .min(1, "최소 1개 이상의 활동 요일을 선택해주세요.")
      .max(7, "최대 7개의 활동 요일을 선택할 수 있습니다."),
    matchTime: z.array(z.enum(MATCH_TIMES_OPTIONS)).min(1, "최소 1개 이상의 매치 시간을 선택해주세요."),
    averageAge: z.enum(AVERAGE_AGE_OPTIONS),
    teamLevel: z.enum(TEAM_LEVEL_OPTIONS, {
      required_error: "팀의 실력을 선택해주세요.",
    }),
    teamIntro: z.string().min(10, "팀 소개는 10자 이상이어야 합니다.").max(500, "팀 소개는 500자 이하여야 합니다."),
    emblem: z.string().min(1, "팀 엠블럼을 업로드해주세요."),
    emblemFile: z.any().optional(),
  })
  .partial()

/** Required Schema */
export const createTeamRequiredSchema = createTeamBaseSchema.required({
  teamName: true,
  teamLeaderName: true,
  teamLeaderPhoneNumber: true,
  teamActivityDays: true,
  matchTime: true,
  averageAge: true,
  teamLevel: true,
  teamIntro: true,
  emblem: true,
})

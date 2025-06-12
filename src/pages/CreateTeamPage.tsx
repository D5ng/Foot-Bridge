import { useFunnel } from "@use-funnel/react-router"
import { z } from "zod"
import {
  AverageAgeStep,
  BasicInfoStep,
  MatchTimeStep,
  SelectDaysStep,
  SkillLevelStep,
  TeamIntroStep,
  UploadEmblemStep,
} from "@/features/createTeam/ui"
import {
  AVERAGE_AGE_OPTIONS,
  DAYS,
  MATCH_TIMES_OPTIONS,
  SKILL_LEVEL_OPTIONS,
} from "@/features/createTeam/ui/form/form.constants"

const teamBasicInfoStepSchema = z
  .object({
    teamName: z.string(),
    teamLeaderName: z.string(),
    teamLeaderPhoneNumber: z.string(),
  })
  .partial()

const teamActivityDaysStepSchema = teamBasicInfoStepSchema.extend({
  teamActivityDays: z.array(z.enum(DAYS)),
})

const matchTimeStepSchema = teamActivityDaysStepSchema.extend({
  matchTime: z.array(z.enum(MATCH_TIMES_OPTIONS)),
})

const averageAgeStepSchema = matchTimeStepSchema.extend({
  averageAge: z.array(z.enum(AVERAGE_AGE_OPTIONS)),
})

const skillLevelStepSchema = averageAgeStepSchema.extend({
  skillLevel: z.enum(SKILL_LEVEL_OPTIONS),
})

const teamIntroStepSchema = skillLevelStepSchema.extend({
  teamIntro: z.string(),
})

const uploadEmblemStepSchema = teamIntroStepSchema.extend({
  emblem: z.string(),
})

export default function CreateTeamPage() {
  const funnel = useFunnel({
    id: "create-team",
    steps: {
      basicInfo: {
        parse: teamBasicInfoStepSchema.required({ teamName: true, teamLeaderName: true, teamLeaderPhoneNumber: true })
          .parse,
      },
      teamActivityDays: {
        parse: teamActivityDaysStepSchema.parse,
      },
      matchTime: {
        parse: matchTimeStepSchema.parse,
      },
      averageAge: {
        parse: averageAgeStepSchema.parse,
      },
      skillLevel: {
        parse: skillLevelStepSchema.parse,
      },
      teamIntro: {
        parse: teamIntroStepSchema.parse,
      },
      uploadEmblem: {
        parse: uploadEmblemStepSchema.parse,
      },
    },
    initial: {
      step: "basicInfo",
      context: {
        teamName: "",
        teamLeaderName: "",
        teamLeaderPhoneNumber: "",
      },
    },
  })

  return (
    <funnel.Render
      basicInfo={({ history }) => (
        <BasicInfoStep
          onNext={({ teamName, teamLeaderName, teamLeaderPhoneNumber }) =>
            history.push("teamActivityDays", { teamName, teamLeaderName, teamLeaderPhoneNumber, teamActivityDays: [] })
          }
        />
      )}
      teamActivityDays={({ history }) => (
        <SelectDaysStep
          onNext={() => {
            history.push("matchTime", (prev) => ({ ...prev, matchTime: [] }))
          }}
        />
      )}
      matchTime={({ history }) => (
        <MatchTimeStep onNext={() => history.push("averageAge", (prev) => ({ ...prev, averageAge: [] }))} />
      )}
      averageAge={({ history }) => (
        <AverageAgeStep onNext={() => history.push("skillLevel", (prev) => ({ ...prev, skillLevel: "비기너" }))} />
      )}
      skillLevel={({ history }) => (
        <SkillLevelStep onNext={() => history.push("teamIntro", (prev) => ({ ...prev, teamIntro: "" }))} />
      )}
      teamIntro={({ history }) => (
        <TeamIntroStep onNext={() => history.push("uploadEmblem", (prev) => ({ ...prev, emblem: "" }))} />
      )}
      uploadEmblem={({ context }) => (
        <UploadEmblemStep
          onNext={() => {
            const fullContext = {
              ...context,
              emblem: "",
            }

            // 예: 제출 처리
            console.log("최종 제출:", fullContext)
          }}
        />
      )}
    />
  )
}

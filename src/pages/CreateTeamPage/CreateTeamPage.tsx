import { useFunnel } from "@use-funnel/react-router"
import {
  CompleteStep,
  BasicInfoStep,
  SelectDaysStep,
  MatchTimeStep,
  AverageAgeStep,
  SkillLevelStep,
  TeamIntroStep,
  UploadEmblemStep,
} from "@/features/createTeam/ui"
import {
  createTeamSchema,
  activityDaysStepSchema,
  matchTimeStepSchema,
  averageAgeStepSchema,
  skillLevelStepSchema,
  introStepSchema,
  uploadEmblemStepSchema,
  completeStepSchema,
} from "@/features/createTeam/ui/form/form.schema"
import { createTeam } from "@/features/createTeam/api"
import { useAuthStore } from "@/shared/stores/authStore"

export default function CreateTeamPage() {
  const { user } = useAuthStore()

  const funnel = useFunnel({
    id: "create-team",
    steps: {
      basicInfo: {
        parse: createTeamSchema.parse,
      },
      teamActivityDays: {
        parse: activityDaysStepSchema.parse,
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
        parse: introStepSchema.parse,
      },
      uploadEmblem: {
        parse: uploadEmblemStepSchema.parse,
      },
      complete: {
        parse: completeStepSchema.parse,
      },
    },
    initial: {
      step: "basicInfo",
      context: {},
    },
  })

  return (
    <funnel.Render
      basicInfo={({ history }) => {
        return <BasicInfoStep onNext={(data) => history.push("teamActivityDays", { ...data })} onBack={history.back} />
      }}
      teamActivityDays={({ history }) => {
        return (
          <SelectDaysStep
            onNext={(data) => history.push("matchTime", (prev) => ({ ...prev, ...data }))}
            onBack={history.back}
          />
        )
      }}
      matchTime={({ history }) => {
        return (
          <MatchTimeStep
            onNext={(data) => history.push("averageAge", (prev) => ({ ...prev, ...data }))}
            onBack={history.back}
          />
        )
      }}
      averageAge={({ history }) => {
        return (
          <AverageAgeStep
            onNext={(data) => history.push("skillLevel", (prev) => ({ ...prev, ...data }))}
            onBack={history.back}
          />
        )
      }}
      skillLevel={({ history }) => {
        return (
          <SkillLevelStep
            onNext={(data) => history.push("teamIntro", (prev) => ({ ...prev, ...data }))}
            onBack={history.back}
          />
        )
      }}
      teamIntro={({ history }) => (
        <TeamIntroStep
          onNext={(data) => history.push("uploadEmblem", (prev) => ({ ...prev, ...data }))}
          onBack={history.back}
        />
      )}
      uploadEmblem={({ context, history }) => (
        <UploadEmblemStep
          onNext={async (data) => {
            try {
              const finalData = { ...context, ...data, owner_id: user!.id }
              await createTeam(finalData)
              history.push("complete", { ...context, ...data })
            } catch (error) {
              console.error("팀 생성 실패:", error)
            }
          }}
          onBack={history.back}
        />
      )}
      complete={({ context }) => {
        return <CompleteStep data={context} />
      }}
    />
  )
}

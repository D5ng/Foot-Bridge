import { useFunnel } from "@use-funnel/react-router"
import { useAuthStore } from "@/shared/stores/authStore"
import type { CreateTeamPayload } from "@/entities/team"
import {
  teamBasicInfoStepSchema,
  teamActivityDaysStepSchema,
  teamActivityTimeStepSchema,
  teamAverageAgeStepSchema,
  teamLevelStepSchema,
  teamIntroStepSchema,
  teamUploadEmblemStepSchema,
  teamCompleteStepSchema,
} from "../../models"
import TeamBasicInfoStep from "./TeamBasicInfoStep/TeamBasicInfoStep"
import TeamActivityDaysStep from "./TeamActivityDaysStep/TeamActivityDaysStep"
import TeamActivityTimeStep from "./TeamActivityTimeStep/TeamActivityTimeStep"
import TeamAverageAgeStep from "./TeamAverageAgeStep/TeamAverageAgeStep"
import TeamLevelStep from "./TeamLevelStep/TeamLevelStep"
import TeamIntroStep from "./TeamIntroStep/TeamIntroStep"
import TeamUploadEmblemStep from "./TeamUploadEmblemStep/TeamUploadEmblemStep"
import CompleteStep from "./CompleteStep/CompleteStep"
import { transformCreateTeamToDto } from "../../lib"
import { useCreateTeam } from "../../models/useCreateTeam.mutate"

export default function CreateTeamFunnel() {
  const { user } = useAuthStore()
  const { mutateAsync, isPending } = useCreateTeam()

  const funnel = useFunnel({
    id: "create-team",
    steps: {
      teamBasicInfo: { parse: teamBasicInfoStepSchema.parse },
      teamActivityDays: { parse: teamActivityDaysStepSchema.parse },
      teamActivityTime: { parse: teamActivityTimeStepSchema.parse },
      teamAverageAge: { parse: teamAverageAgeStepSchema.parse },
      teamLevel: { parse: teamLevelStepSchema.parse },
      teamIntro: { parse: teamIntroStepSchema.parse },
      teamUploadEmblem: { parse: teamUploadEmblemStepSchema.parse },
      complete: { parse: teamCompleteStepSchema.parse },
    },
    initial: {
      step: "teamBasicInfo",
      context: {},
    },
  })

  const handleCreateTeamSubmit = async (data: Omit<CreateTeamPayload, "owner_id">) => {
    try {
      const teamData = transformCreateTeamToDto({ ...data, owner_id: user!.id })
      const createTeamData = await mutateAsync(teamData)

      if (!createTeamData) {
        throw new Error("팀 생성에 실패했어요.")
      }
    } catch (error) {
      const err = error as Error
      throw new Error(err.message)
    }
  }

  return (
    <funnel.Render
      teamBasicInfo={({ history }) => {
        return (
          <TeamBasicInfoStep onNext={(data) => history.push("teamActivityDays", { ...data })} onBack={history.back} />
        )
      }}
      teamActivityDays={({ history }) => {
        return (
          <TeamActivityDaysStep
            onNext={(data) => history.push("teamActivityTime", (prev) => ({ ...prev, ...data }))}
            onBack={history.back}
          />
        )
      }}
      teamActivityTime={({ history }) => {
        return (
          <TeamActivityTimeStep
            onNext={(data) => history.push("teamAverageAge", (prev) => ({ ...prev, ...data }))}
            onBack={history.back}
          />
        )
      }}
      teamAverageAge={({ history }) => {
        return (
          <TeamAverageAgeStep
            onNext={(data) => history.push("teamLevel", (prev) => ({ ...prev, ...data }))}
            onBack={history.back}
          />
        )
      }}
      teamLevel={({ history }) => {
        return (
          <TeamLevelStep
            onNext={(data) => history.push("teamIntro", (prev) => ({ ...prev, ...data }))}
            onBack={history.back}
          />
        )
      }}
      teamIntro={({ history }) => {
        return (
          <TeamIntroStep
            onNext={(data) => history.push("teamUploadEmblem", (prev) => ({ ...prev, ...data }))}
            onBack={history.back}
          />
        )
      }}
      teamUploadEmblem={({ context, history }) => (
        <TeamUploadEmblemStep
          isPending={isPending}
          onNext={async (data) => {
            await handleCreateTeamSubmit({ ...context, ...data })
            history.push("complete", { ...context, ...data })
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

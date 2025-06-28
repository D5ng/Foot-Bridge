import { useFunnel } from "@use-funnel/react-router"
import { useNavigate } from "react-router"
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
} from "../../models"
import TeamBasicInfoStep from "./TeamBasicInfoStep/TeamBasicInfoStep"
import TeamActivityDaysStep from "./TeamActivityDaysStep/TeamActivityDaysStep"
import TeamActivityTimeStep from "./TeamActivityTimeStep/TeamActivityTimeStep"
import TeamAverageAgeStep from "./TeamAverageAgeStep/TeamAverageAgeStep"
import TeamLevelStep from "./TeamLevelStep/TeamLevelStep"
import TeamIntroStep from "./TeamIntroStep/TeamIntroStep"
import TeamUploadEmblemStep from "./TeamUploadEmblemStep/TeamUploadEmblemStep"
import { transformCreateTeamToDto } from "../../lib"
import { useCreateTeam } from "../../models/useCreateTeam.mutate"

export default function CreateTeamFunnel() {
  const { user } = useAuthStore()
  const { mutateAsync, isPending } = useCreateTeam()
  const navigate = useNavigate()

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
      // complete: { parse: teamCompleteStepSchema.parse },
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
        throw new Error("팀 등록 중 문제가 발생했어요")
      }
    } catch (error) {
      const err = error as Error
      throw new Error(err.message)
    }
  }

  return (
    <funnel.Render
      teamBasicInfo={({ history, context }) => {
        return (
          <TeamBasicInfoStep
            onNext={(data) => history.push("teamActivityDays", { ...data })}
            onBack={() => navigate(-1)}
            prevContext={context}
          />
        )
      }}
      teamActivityDays={({ history, context }) => {
        return (
          <TeamActivityDaysStep
            onNext={(data) => history.push("teamActivityTime", (prev) => ({ ...prev, ...data }))}
            onBack={() => history.push("teamBasicInfo", () => ({ ...context }))}
            prevContext={context}
          />
        )
      }}
      teamActivityTime={({ history, context }) => {
        return (
          <TeamActivityTimeStep
            onNext={(data) => history.push("teamAverageAge", (prev) => ({ ...prev, ...data }))}
            onBack={() => history.push("teamActivityDays", () => ({ ...context }))}
            prevContext={context}
          />
        )
      }}
      teamAverageAge={({ history, context }) => {
        return (
          <TeamAverageAgeStep
            onNext={(data) => history.push("teamLevel", (prev) => ({ ...prev, ...data }))}
            onBack={() => history.push("teamActivityTime", () => ({ ...context }))}
            prevContext={context}
          />
        )
      }}
      teamLevel={({ history, context }) => {
        return (
          <TeamLevelStep
            onNext={(data) => history.push("teamIntro", (prev) => ({ ...prev, ...data }))}
            onBack={() => history.push("teamAverageAge", () => ({ ...context }))}
            prevContext={context}
          />
        )
      }}
      teamIntro={({ history, context }) => {
        return (
          <TeamIntroStep
            onNext={(data) => history.push("teamUploadEmblem", (prev) => ({ ...prev, ...data }))}
            onBack={() => history.push("teamLevel", () => ({ ...context }))}
            prevContext={context}
          />
        )
      }}
      teamUploadEmblem={({ context, history }) => (
        <TeamUploadEmblemStep
          isPending={isPending}
          onNext={async (data) => {
            await handleCreateTeamSubmit({ ...context, ...data })
            // history.push("complete", { ...context, ...data })
            navigate("/create-team/complete", { replace: true })
          }}
          onBack={() => history.push("teamIntro", () => ({ ...context }))}
          prevContext={context}
        />
      )}
      // complete={({ context }) => {
      //   return <CompleteStep data={context} />
      // }}
    />
  )
}

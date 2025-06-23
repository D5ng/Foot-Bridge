import { useFunnel } from "@use-funnel/react-router"
import { useAuthStore } from "@/shared/stores/authStore"
import type { CreateMatchPayload } from "@/entities/match"
import {
  matchDateTimeStepSchema,
  matchFormatStepSchema,
  matchDescriptionStepSchema,
  matchCompleteStepSchema,
  useCreateMatchMutation,
  useFetchTeamByOwnerId,
} from "../../models"

import MatchDateTimeStep from "./MatchDateTimeStep/MatchDateTimeStep"
import MatchFormatStep from "./MatchFormatStep/MatchFormatStep"
import MatchDescriptionStep from "./MatchDescriptionStep/MatchDescriptionStep"
import CompleteStep from "./CompleteStep/CompleteStep"
import { transformCreateMatchToDto } from "../../lib"

export default function CreateMatchFunnel() {
  const { user } = useAuthStore()
  const { data: team } = useFetchTeamByOwnerId(user!.id)
  const { mutateAsync, isPending, data: createMatchData } = useCreateMatchMutation()

  // Todo: 현재 팀이 있는지 없는지를 파악해야함,
  // Todo: 이걸 어떻게 파악하는게 좋지 ?

  const funnel = useFunnel({
    id: "create-match",
    steps: {
      matchDateTime: { parse: matchDateTimeStepSchema.parse },
      matchFormat: { parse: matchFormatStepSchema.parse },
      matchDescription: { parse: matchDescriptionStepSchema.parse },
      complete: { parse: matchCompleteStepSchema.parse },
    },
    initial: {
      step: "matchDateTime",
      context: {},
    },
  })

  const handleCreateMatchSubmit = async (data: Omit<CreateMatchPayload, "teamId" | "teamLevel">) => {
    try {
      const matchData = transformCreateMatchToDto({
        ...data,
        teamId: team!.id,
        teamLevel: team!.team_level,
      })

      const createMatchData = await mutateAsync(matchData)

      if (!createMatchData) {
        throw new Error("매치 등록에 실패했어요. 다시 시도해주세요")
      }

      return createMatchData
    } catch (error) {
      const err = error as Error
      throw new Error(err.message)
    }
  }

  return (
    <funnel.Render
      matchDateTime={({ history }) => {
        return <MatchDateTimeStep onNext={(data) => history.push("matchFormat", { ...data })} onBack={history.back} />
      }}
      matchFormat={({ history }) => {
        return (
          <MatchFormatStep
            onNext={(data) => history.push("matchDescription", (prev) => ({ ...prev, ...data }))}
            onBack={history.back}
          />
        )
      }}
      matchDescription={({ history, context }) => {
        return (
          <MatchDescriptionStep
            isPending={isPending}
            onNext={async (data) => {
              await handleCreateMatchSubmit({ ...context, ...data })
              history.push("complete", { ...context, ...data })
            }}
            onBack={history.back}
          />
        )
      }}
      complete={() => {
        console.log(createMatchData)
        return <CompleteStep />
      }}
    />
  )
}

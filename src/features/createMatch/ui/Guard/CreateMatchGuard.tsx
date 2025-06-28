import { ErrorBoundary } from "react-error-boundary"
import { useTeamByOwnerId } from "@/entities/team"
import { useAuthStore } from "@/shared/stores/authStore"
import CreateMatchFunnel from "../form/CreateMatchFunnel"
import MatchCreationErrorFallback from "../ErrorFallback/MatchCreationErrorFallback"

export default function CreateMatchGuard() {
  const { user } = useAuthStore()
  const { data: teamData } = useTeamByOwnerId(user?.id ?? "")

  if (!teamData) {
    throw new Error("매치 등록은 팀이 있어야 가능해요.")
  }

  return (
    <ErrorBoundary fallback={<MatchCreationErrorFallback />}>
      <CreateMatchFunnel />
    </ErrorBoundary>
  )
}

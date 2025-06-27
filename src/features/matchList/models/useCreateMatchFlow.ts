import { useNavigate } from "react-router"
import { useState } from "react"
import { useAuthStore } from "@/shared/stores/authStore"
import { useFetchTeamByOwnerId } from "@/features/createMatch/models"
import type { RequiredModalType } from "@/entities/match/match.types"
import { REQUIRED_MODAL_TYPE } from "@/entities/match"

export function useCreateMatchFlow() {
  const navigate = useNavigate()
  const [modalType, setModalType] = useState<RequiredModalType | null>(null)

  const { user } = useAuthStore()
  const { data: teamData } = useFetchTeamByOwnerId(user?.id ?? "")

  const handleProtectedFlow = () => {
    if (!user) {
      setModalType(REQUIRED_MODAL_TYPE.LOGIN)
      return
    }

    if (!teamData) {
      setModalType(REQUIRED_MODAL_TYPE.TEAM)
      return
    }

    navigate("/create-match")
  }

  return { modalType, handleProtectedFlow }
}

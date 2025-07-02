import { useState } from "react"
import { useAuthStore } from "@/shared/stores/authStore"

import type { RequiredModalType } from "@/entities/match/match.types"
import { REQUIRED_MODAL_TYPE } from "@/entities/match"
import { useTeamByOwnerId } from "@/entities/team"

export function useCreateMatchFlow() {
  const [modalType, setModalType] = useState<RequiredModalType | null>(null)

  const { user } = useAuthStore()
  const { data: teamData } = useTeamByOwnerId(user?.id ?? "")

  const handleProtectedFlow = () => {
    if (!user) {
      setModalType(REQUIRED_MODAL_TYPE.LOGIN)
      return
    }

    if (!teamData) {
      setModalType(REQUIRED_MODAL_TYPE.TEAM)
      return
    }
  }

  return { modalType, handleProtectedFlow }
}

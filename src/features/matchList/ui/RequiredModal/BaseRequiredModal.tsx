import { REQUIRED_MODAL_TYPE, type RequiredModalType } from "@/entities/match"
import LoginRequiredModal from "./LoginRequiredModal"
import TeamRequiredModal from "./TeamRequiredModal"

export interface RequiredModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  modalType: RequiredModalType | null
}

export default function BaseRequiredModal({ isOpen, onOpenChange, modalType }: RequiredModalProps) {
  if (!modalType) return null

  return modalType === REQUIRED_MODAL_TYPE.LOGIN ? (
    <LoginRequiredModal isOpen={isOpen} onOpenChange={onOpenChange} />
  ) : (
    <TeamRequiredModal isOpen={isOpen} onOpenChange={onOpenChange} />
  )
}

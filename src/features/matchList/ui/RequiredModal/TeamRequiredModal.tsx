import { Link } from "react-router"
import {
  Modal,
  ModalPortal,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalButtonLayout,
  Button,
  ModalClose,
} from "@/shared/ui"
import { modalButton } from "./RequiredModal.css"
import type { RequiredModalProps } from "./BaseRequiredModal"

export default function TeamRequiredModal({ isOpen, onOpenChange }: Omit<RequiredModalProps, "modalType">) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>먼저 팀을 만들어야 매치를 등록할 수 있어요</ModalTitle>
          <ModalDescription>
            팀을 만들어야 매치에 참가하거나 상대 팀을 등록할 수 있어요. <br />
            지금 바로 팀을 만들어볼까요?
          </ModalDescription>
          <ModalButtonLayout>
            <Button variant="primary" className={modalButton} asChild>
              <Link to="/create-team">팀 만들기</Link>
            </Button>
            <ModalClose variant="terciary">돌아가기</ModalClose>
          </ModalButtonLayout>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}

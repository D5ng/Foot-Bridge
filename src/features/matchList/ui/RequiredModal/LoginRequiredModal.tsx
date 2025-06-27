import { Link } from "react-router"
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalButtonLayout,
  ModalPortal,
  ModalClose,
} from "@/shared/ui"
import { modalButton } from "./RequiredModal.css"
import type { RequiredModalProps } from "./BaseRequiredModal"

export default function LoginRequiredModal({ isOpen, onOpenChange }: Omit<RequiredModalProps, "modalType">) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>매치 등록을 하려면 로그인이 필요해요</ModalTitle>
          <ModalDescription>
            로그인을 하면 팀을 만들고 매치를 등록할 수 있어요. <br />
            아직 계정이 없다면 간단하게 가입할 수 있어요!
          </ModalDescription>
          <ModalButtonLayout>
            <Button variant="primary" className={modalButton} asChild>
              <Link to="/login">로그인하러 가기</Link>
            </Button>
            <ModalClose variant="terciary">나중에 할래요</ModalClose>
          </ModalButtonLayout>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}

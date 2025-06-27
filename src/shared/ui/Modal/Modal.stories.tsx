import type { Meta, StoryObj } from "@storybook/react-vite"
import { Link } from "react-router"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalPortal,
  ModalButtonLayout,
  ModalClose,
} from "./Modal"
import Button from "../Button/Button"
import { modalButton } from "./Modal.css"

function ModalStory() {
  return (
    <Modal>
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

const meta = {
  component: ModalStory,
} satisfies Meta<typeof ModalStory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

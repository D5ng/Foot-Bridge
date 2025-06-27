import { useCreateMatchFlow } from "@/features/matchList/models"
import { Button } from "@/shared/ui"
import { useToggle } from "@/shared/hooks"
import { createMatchButton } from "./CreateMatchButton.css"
import BaseRequiredModal from "../RequiredModal/BaseRequiredModal"

export default function CreateMatchButton() {
  const { isOpen, open, setOpen } = useToggle()
  const { modalType, handleProtectedFlow } = useCreateMatchFlow()

  const handleModalClick = () => {
    open()
    handleProtectedFlow()
  }

  return (
    <>
      <Button className={createMatchButton} onClick={handleModalClick}>
        매치 등록하기
      </Button>

      <BaseRequiredModal isOpen={isOpen} onOpenChange={(isOpen) => setOpen(isOpen)} modalType={modalType} />
    </>
  )
}

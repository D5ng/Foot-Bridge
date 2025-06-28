import clsx from "clsx"
import { useCreateMatchFlow } from "@/features/matchList/models"
import { Button } from "@/shared/ui"
import { useToggle } from "@/shared/hooks"
import { createMatchButton } from "./CreateMatchButton.css"
import BaseRequiredModal from "../RequiredModal/BaseRequiredModal"

interface Props {
  className?: string
}

export default function CreateMatchButton({ className }: Props) {
  const { isOpen, open, setOpen } = useToggle()
  const { modalType, handleProtectedFlow } = useCreateMatchFlow()

  const handleModalClick = () => {
    open()
    handleProtectedFlow()
  }

  return (
    <>
      <Button className={clsx(className || createMatchButton)} onClick={handleModalClick}>
        매치 등록하기
      </Button>

      <BaseRequiredModal isOpen={isOpen} onOpenChange={(isOpen) => setOpen(isOpen)} modalType={modalType} />
    </>
  )
}

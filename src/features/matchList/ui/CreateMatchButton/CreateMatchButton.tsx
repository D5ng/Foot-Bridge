import clsx from "clsx"
import { format, parse } from "date-fns"
import { useNavigate, useSearchParams } from "react-router"
import { useCreateMatchFlow } from "@/features/matchList/models"
import { Button } from "@/shared/ui"
import { useToggle } from "@/shared/hooks"
import { createMatchButton } from "./CreateMatchButton.css"
import BaseRequiredModal from "../RequiredModal/BaseRequiredModal"

interface Props {
  className?: string
}

export default function CreateMatchButton({ className }: Props) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { isOpen, open, setOpen } = useToggle()
  const { modalType, handleProtectedFlow } = useCreateMatchFlow()

  const handleModalClick = () => {
    open()

    if (modalType) {
      handleProtectedFlow()
      return
    }

    const initialDate = searchParams.get("day")
      ? parse(searchParams.get("day")!, "dd", new Date())
      : parse(format(new Date(), "yyyy-MM-dd"), "yyyy-MM-dd", new Date())

    navigate(`/create-match?day=${format(initialDate, "dd")}`)
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

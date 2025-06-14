import { Link } from "react-router"
import { Button } from "@/shared/ui"
import { createMatchButton } from "./CreateMatchButton.css"

export default function CreateMatchButton() {
  return (
    <Button asChild className={createMatchButton}>
      <Link to="/create-match">매치 등록하기</Link>
    </Button>
  )
}

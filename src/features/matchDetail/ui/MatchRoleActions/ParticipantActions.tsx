import type { MatchStatus } from "@/entities/match"
import { Button } from "@/shared/ui"

interface Props {
  handleMatchApply: () => void
  isPending: boolean
  status: MatchStatus
}

export function ParticipantActions({ handleMatchApply, isPending, status }: Props) {
  const isDisabled = status === "confirmed" || status === "cancelled"

  return (
    <Button onClick={handleMatchApply} isLoading={isPending} disabled={isDisabled || isPending}>
      {isDisabled ? "이미 매칭이 완료되었어요" : "매치 신청하기"}
    </Button>
  )
}

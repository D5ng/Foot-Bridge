import { Button, ErrorFallback } from "@/shared/ui"
import { matchListErrorFallbackContainer } from "./MatchListErrorFallback.css"

export default function MatchListErrorFallback({ resetErrorBoundary }: { resetErrorBoundary: () => void }) {
  return (
    <div className={matchListErrorFallbackContainer}>
      <ErrorFallback title="매치 목록을 불러오는 데 문제가 발생했어요." errorMessage="잠시 후 다시 시도해 주세요.">
        <Button variant="primary" onClick={resetErrorBoundary}>
          다시 시도
        </Button>
      </ErrorFallback>
    </div>
  )
}

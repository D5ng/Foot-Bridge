import type { ReactNode } from "react"
import {
  errorFallbackChildrenContainer,
  errorFallbackContainer,
  errorFallbackMessage,
  errorFallbackTitle,
} from "./ErrorFallback.css"

interface Props {
  title?: string
  errorMessage?: string
  children?: ReactNode
}

/**
 * ErrorFallback UI
 * - 옵션을 사용하지 않으면 기본 메시지 표시
 * - onRefetch, isRefetchButtonVisible 옵션을 사용하려면 모두 전달
 *
 * @param title - 에러 제목
 * @param description - 에러 메시지
 * @param render - UI 렌더링
 * @returns 에러 UI
 */

export default function ErrorFallback({ errorMessage, title, children }: Props) {
  return (
    <div className={errorFallbackContainer}>
      <h3 className={errorFallbackTitle}>{title || "잠시 후 다시 시도해주세요."}</h3>
      <p className={errorFallbackMessage}>
        {errorMessage || "현재 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주시기 바랍니다."}
      </p>

      <div className={errorFallbackChildrenContainer}>{children}</div>
    </div>
  )
}

// 각 에러들을 내가 직접 처리하는게 좋을까?

import { clsx } from "clsx"
import { colorVars } from "@/shared/tokens"
import type { ArrowIconProps } from "./types"
import { arrowIcon } from "./ArrowIcon.css"

export default function ArrowIcon({
  color = colorVars.highlight[500],
  size = 16,
  className,
  decorative = false,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden,
  title,
  role,
  direction = "right",
  ...props
}: ArrowIconProps) {
  // 접근성 속성 자동 설정
  const accessibilityProps = {
    "aria-label": decorative ? undefined : ariaLabel || "오른쪽 화살표",
    "aria-hidden": decorative ? true : ariaHidden,
    role: decorative ? ("presentation" as const) : role || ("img" as const),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={clsx(arrowIcon({ direction }), className)}
      {...accessibilityProps}
      {...props}
    >
      {!decorative && title && <title>{title}</title>}
      <path d="M8.5 5l7 7-7 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

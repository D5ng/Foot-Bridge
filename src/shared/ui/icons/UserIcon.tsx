import { colorVars } from "@/shared/tokens"
import type { IconProps } from "./types"

export default function UserIcon({
  color = colorVars.highlight[500],
  size = 16,
  className,
  decorative = false,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden,
  title,
  role,
  ...props
}: IconProps) {
  // 접근성 속성 자동 설정
  const accessibilityProps = {
    "aria-label": decorative ? undefined : ariaLabel || "사용자",
    "aria-hidden": decorative ? true : ariaHidden,
    role: decorative ? ("presentation" as const) : role || ("img" as const),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...accessibilityProps}
      {...props}
    >
      {!decorative && title && <title>{title}</title>}
      <path
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="7" r="4" stroke={color} strokeWidth="2" />
    </svg>
  )
}

import type { IconProps } from "./types"

export default function EditIcon({
  color = "currentColor",
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
    "aria-label": decorative ? undefined : ariaLabel || "편집",
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
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill={color} />
    </svg>
  )
}

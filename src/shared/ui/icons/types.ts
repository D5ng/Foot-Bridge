export interface IconProps {
  color?: string
  size?: number | string
  className?: string
  // 접근성 관련
  "aria-label"?: string
  "aria-hidden"?: boolean
  title?: string
  role?: "img" | "presentation"
  decorative?: boolean // 장식용인지 의미있는 아이콘인지
}

type ArrowDirection = "left" | "right" | "up" | "down"

export interface ArrowIconProps extends IconProps {
  direction?: ArrowDirection
}

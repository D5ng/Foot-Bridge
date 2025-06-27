import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const matchFormatOptionsWrapper = style({
  padding: `${spacing[4]} 0`,
  display: "flex",
  gap: spacing[2],
  flexWrap: "wrap",
  letterSpacing: "0.05rem",
})

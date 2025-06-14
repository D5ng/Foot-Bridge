import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const averageAgeFormBadgeLayout = style({
  display: "flex",
  flexWrap: "wrap",
  gap: spacing[2],
  marginTop: spacing[4],
})

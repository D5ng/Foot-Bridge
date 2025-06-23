import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const selectDaysFormBadgeLayout = style({
  display: "flex",
  flexWrap: "wrap",
  gap: spacing[1],
  padding: `${spacing[4]} 0`,
})

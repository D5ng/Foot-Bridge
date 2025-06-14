import { style } from "@vanilla-extract/css"
import { colorVars, radius, spacing } from "@/shared/tokens"

export const matchListBannerWrapper = style({
  borderRadius: radius.lg,
  backgroundColor: colorVars.highlight[100],
  height: "140px",
  margin: spacing[4],
})

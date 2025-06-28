import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const matchListErrorFallbackContainer = style({
  display: "flex",
  justifyContent: "center",
  margin: `0 ${spacing[4]}`,
})

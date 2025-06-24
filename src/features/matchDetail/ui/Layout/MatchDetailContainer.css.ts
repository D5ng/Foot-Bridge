import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const matchDetailContainer = style({
  display: "flex",
  flexDirection: "column",
  margin: `0 ${spacing[4]}`,
})

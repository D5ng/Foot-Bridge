import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const accountActionsWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: `${spacing[6]} ${spacing[4]}`,
})

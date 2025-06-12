import { style } from "@vanilla-extract/css"
import { colorVars, spacing } from "@/shared/tokens"

export const uploadEmblemStepImageWrapper = style({
  width: "144px",
  height: "144px",
  borderRadius: "50%",
  backgroundColor: colorVars.highlight[50],
  margin: `${spacing[8]} auto`,
})

export const uploadEmblemStepImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
})

import { style } from "@vanilla-extract/css"
import { colorVars, radius, spacing } from "@/shared/tokens"

export const uploadEmblemStepImageWrapper = style({
  width: "144px",
  height: "144px",
  borderRadius: radius.full,
  backgroundColor: colorVars.highlight[50],
  margin: `${spacing[8]} auto`,
  position: "relative",
})

export const uploadEmblemStepImage = style({
  borderRadius: radius.full,
})

export const uploadEmblemStepEditIconWrapper = style({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: "36px",
  height: "36px",
  borderRadius: radius.full,
  backgroundColor: colorVars.neutral.light[200],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
})

export const uploadEmblemStepEditIconInput = style({
  display: "none",
})

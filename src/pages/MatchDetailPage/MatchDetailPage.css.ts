import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const navClassName = style({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 100,
  width: "100%",
  backgroundColor: "transparent",
})

export const matchDetailButtonWrapper = style({
  paddingTop: spacing[12],
})

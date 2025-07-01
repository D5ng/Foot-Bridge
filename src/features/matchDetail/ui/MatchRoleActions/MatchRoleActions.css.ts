import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const matchDetailButtonWrapper = style({
  display: "flex",
  flexDirection: "column",
  paddingTop: spacing[12],
  gap: spacing[4],
})

export const matchDetailRequestCountContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[2],
})

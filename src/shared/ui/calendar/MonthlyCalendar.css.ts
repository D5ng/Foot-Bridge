import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const wrapper = style({
  display: "flex",
  gap: spacing[1],
})

export const dayCellSlide = style({
  width: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

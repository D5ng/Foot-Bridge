import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const basicInfoForm = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[4],
})

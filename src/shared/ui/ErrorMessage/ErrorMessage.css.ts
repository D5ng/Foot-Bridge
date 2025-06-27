import { style } from "@vanilla-extract/css"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const errorMessage = style({
  ...typography.body.sm,
  color: colorVars.error[500],
  marginTop: spacing[2],
})

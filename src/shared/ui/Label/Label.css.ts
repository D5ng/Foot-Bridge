import { style } from "@vanilla-extract/css"
import { colorVars, typography } from "@/shared/tokens"

export const label = style({
  ...typography.body.md,
  fontWeight: 500,
  color: colorVars.neutral.dark[500],
})

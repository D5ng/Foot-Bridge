import { style } from "@vanilla-extract/css"
import { colorVars, typography } from "@/shared/tokens"

export const matchDescriptionContainer = style({
  ...typography.body.md,
  color: colorVars.neutral.dark[500],
})

import { style } from "@vanilla-extract/css"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const textarea = style({
  ...typography.body.md,
  color: colorVars.neutral.light[400],
  borderBottom: `2px solid ${colorVars.neutral.light[200]}`,
  paddingTop: spacing[4],
  paddingBottom: spacing[3],
  display: "block",
  width: "100%",

  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
      borderBottom: `2px solid ${colorVars.error[500]}`,
    },
  },
})

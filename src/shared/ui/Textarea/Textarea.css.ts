import { recipe } from "@vanilla-extract/recipes"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const textarea = recipe({
  base: {
    ...typography.body.md,
    borderBottom: `2px solid ${colorVars.neutral.light[200]}`,
    paddingTop: spacing[4],
    paddingBottom: spacing[3],
    display: "block",
    width: "100%",

    selectors: {
      "&::placeholder": {
        color: colorVars.neutral.light[400],
      },
      "&:disabled": {
        cursor: "not-allowed",
        borderBottom: `2px solid ${colorVars.error[500]}`,
      },
    },
  },

  variants: {
    error: {
      true: {
        borderBottom: `2px solid ${colorVars.error[500]}`,
      },
      false: {
        borderBottom: `2px solid ${colorVars.neutral.light[200]}`,
      },
    },
  },
})

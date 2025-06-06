import { recipe, type RecipeVariants } from "@vanilla-extract/recipes"
import { style } from "@vanilla-extract/css"
import { colorVars, radius, spacing, typography } from "@/shared/tokens"

export const alertWrapper = recipe({
  base: {
    borderRadius: radius["2xl"],
    padding: spacing[4],
    display: "flex",
    flexDirection: "column",
    gap: spacing[1],
  },

  variants: {
    variant: {
      informative: {
        backgroundColor: colorVars.highlight[50],
      },

      success: {
        backgroundColor: colorVars.success[50],
      },

      warning: {
        backgroundColor: colorVars.warning[50],
      },

      error: {
        backgroundColor: colorVars.error[50],
      },
    },
  },

  defaultVariants: {
    variant: "informative",
  },
})

export type AlertVariants = NonNullable<RecipeVariants<typeof alertWrapper>>

export const alertTitle = style({
  ...typography.heading.sm,
})

/* Common Alert Content (Cotnent, List, ListItem) */
export const alertContent = style({
  ...typography.body.sm,
  color: colorVars.neutral.dark[700],
})

export const alertList = style({
  listStyle: "disc",
  paddingLeft: spacing[4],
})

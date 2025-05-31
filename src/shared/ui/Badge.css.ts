import { recipe, type RecipeVariants } from "@vanilla-extract/recipes"
import { style } from "@vanilla-extract/css"
import { colorVars, radius, spacing, typography } from "../tokens"

export const badge = recipe({
  base: {
    padding: `${spacing["1.5"]} ${spacing[2]}`,
    borderRadius: radius.xl,
    ...typography.caption.md,
  },

  variants: {
    variant: {
      default: {
        background: colorVars.highlight[50],
        color: colorVars.highlight[400],
      },
      focus: {
        background: colorVars.highlight[400],
        color: colorVars.neutral.light[50],
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
})

export const badgeContent = style({
  padding: `0 ${spacing[1]}`,
})

export type BadgeVariants = NonNullable<RecipeVariants<typeof badge>>

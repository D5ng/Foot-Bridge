import { recipe, type RecipeVariants } from "@vanilla-extract/recipes"
import { colorVars, radius, spacing, typography } from "@/shared/tokens"

export const badge = recipe({
  base: {
    padding: `${spacing["1.5"]} ${spacing[3]}`,
    borderRadius: radius.xl,
    ...typography.action.sm,
    lineHeight: "normal",
    display: "inline-flex",
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

export type BadgeVariants = NonNullable<RecipeVariants<typeof badge>>

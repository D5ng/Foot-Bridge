import { recipe } from "@vanilla-extract/recipes"
import { style } from "@vanilla-extract/css"
import { colorVars, radius, spacing, typography } from "@/shared/tokens"

export const selectableList = recipe({
  base: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
    borderRadius: radius.xl,
    ...typography.body.md,
  },
  variants: {
    variant: {
      default: {
        border: `1px solid ${colorVars.neutral.light[400]}`,
      },
      selected: {
        backgroundColor: colorVars.highlight[50],
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
})

export const selectableListIcon = style({
  width: "12px",
  height: "12px",
})

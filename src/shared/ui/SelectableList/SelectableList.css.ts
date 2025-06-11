import { recipe } from "@vanilla-extract/recipes"
import { style } from "@vanilla-extract/css"
import { colorVars, radius, spacing, typography } from "@/shared/tokens"

export const selectableListWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[2],
  padding: `${spacing[4]} 0`,
})

export const selectableListItem = recipe({
  base: {
    width: "100%",
    minWidth: "332px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
    borderRadius: radius.xl,
  },
  variants: {
    variant: {
      default: {
        border: `1px solid ${colorVars.neutral.light[200]}`,
        backgroundColor: colorVars.neutral.light[50],
      },
      selected: {
        border: `1px solid ${colorVars.highlight[50]}`,
        backgroundColor: colorVars.highlight[50],
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
})

export const selectableListItemLabel = style({
  display: "block",
  ...typography.body.md,
})

export const selectableListItemIcon = style({
  width: "12px",
  height: "12px",
  display: "block",
})

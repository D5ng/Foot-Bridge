import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { typography, colorVars, spacing, radius } from "@/shared/tokens"

export const selectWrapper = style({
  position: "relative",
  padding: `${spacing[4]} 0`,
})

export const selectTrigger = recipe({
  base: {
    ...typography.body.md,
    padding: `0 ${spacing[4]}`,
    height: spacing[12],
    borderRadius: radius.xl,
    width: "100%",
    textAlign: "left",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  variants: {
    variant: {
      default: {
        border: `1px solid ${colorVars.neutral.light[200]}`,
      },
      selected: {
        border: `1px solid ${colorVars.highlight[300]}`,
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
})

export const selectTriggerIcon = style({
  position: "absolute",
  right: spacing[4],
  top: "50%",
  transform: "translateY(-50%)",
})

export const selectOptionList = style({
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  border: `1px solid ${colorVars.neutral.light[200]}`,
  borderRadius: radius.xl,
  backgroundColor: colorVars.neutral.light[50],
  zIndex: 100,
  overflow: "scroll",
  maxHeight: "300px",
})

export const selectOptionListItem = style({
  ...typography.body.md,
  height: spacing[12],
  padding: `${spacing[3]} ${spacing[4]}`,
})

export const selectOptionListItemButton = style({
  borderRadius: radius.md,
  padding: `${spacing[3]} ${spacing[4]}`,
  width: "100%",
  selectors: {
    "&:hover": {
      backgroundColor: colorVars.highlight[50],
    },
  },
})

export const selectTriggerValue = style({
  color: colorVars.neutral.light[300],
})

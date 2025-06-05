import { recipe } from "@vanilla-extract/recipes"
import { style, styleVariants } from "@vanilla-extract/css"
import { colorVars, radius, spacing, typography } from "@/shared/tokens"

const weekdayBase = style({ ...typography.caption.md })

const colors = {
  selected: colorVars.highlight[100],
  unselected: colorVars.neutral.dark[500],
}

export const weekdayStyle = styleVariants(colors, (color) => [weekdayBase, { color }])

export const dayNumberBase = style({ ...typography.body.lg })

export const dayNumberColors = {
  selected: colorVars.neutral.light[50],
  unselected: colorVars.neutral.dark[700],
}

export const dayNumberStyle = styleVariants(dayNumberColors, (color) => [dayNumberBase, { color }])

export const dayCell = recipe({
  base: {
    padding: spacing[3],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: radius["2xl"],
    gap: spacing[1],
  },
  variants: {
    variant: {
      default: {
        backgroundColor: colorVars.neutral.light[50],
      },

      selected: {
        backgroundColor: colorVars.highlight[400],
        color: colorVars.neutral.light[50],
      },

      current: {
        backgroundColor: colorVars.neutral.light[200],
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
})

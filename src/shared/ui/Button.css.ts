import { recipe } from "@vanilla-extract/recipes"
import { colorVars, typography } from "../tokens"

export const button = recipe({
  base: {
    width: "100%",
    borderRadius: 8,
    ...typography.action.md,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: colorVars.highlight[400],
        color: colorVars.neutral.light[50],
      },
      // secondary: {},
      // outlined: {},
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

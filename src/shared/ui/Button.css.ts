import { recipe } from "@vanilla-extract/recipes"
import { colorVars, radius, typography } from "../tokens"

export const button = recipe({
  base: {
    width: "100%",
    borderRadius: 8,
    ...typography.action.md,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.2s ease",
    selectors: {
      "&:active": {
        transform: "scale(0.98)",
      },
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: colorVars.highlight[400],
        color: colorVars.neutral.light[50],
        selectors: {
          "&:hover": {
            backgroundColor: colorVars.highlight[500],
          },
          "&:active": {
            backgroundColor: colorVars.highlight[500],
          },
          "&:disabled": {
            backgroundColor: colorVars.highlight[100],
            cursor: "not-allowed",
          },
        },
      },
      secondary: {
        border: `1px solid ${colorVars.highlight[400]}`,
        borderRadius: radius.xl,
        color: colorVars.highlight[400],
        selectors: {
          "&:hover": {
            backgroundColor: colorVars.highlight[100],
          },
          "&:active": {
            backgroundColor: colorVars.highlight[100],
          },
        },
      },
      terciary: {
        color: colorVars.highlight[400],
        selectors: {
          "&:hover": {
            backgroundColor: colorVars.highlight[100],
          },
          "&:active": {
            backgroundColor: colorVars.highlight[100],
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

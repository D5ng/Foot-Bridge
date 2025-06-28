import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  backgroundColor: colorVars.overlay,
})

export const modalContent = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "340px",
  backgroundColor: colorVars.neutral.light[50],
  borderRadius: spacing[4],
  padding: `${spacing[4]} ${spacing[5]}`,
})

export const modalTitle = style({
  ...typography.heading.lg,
})

export const modalDescription = style({
  marginTop: spacing[2],
  ...typography.body.sm,
  lineHeight: "20px",
  color: colorVars.neutral.dark[600],
})

export const modalButton = style({
  height: spacing[10],
  ...typography.action.sm,
})

export const modalButtonLayout = recipe({
  base: {
    marginTop: spacing[6],
  },
  variants: {
    layout: {
      row: {
        display: "flex",
        gap: spacing[2],
      },
      col: {
        display: "flex",
        flexDirection: "column",
        gap: spacing[2],
      },
    },
  },
  defaultVariants: {
    layout: "col",
  },
})

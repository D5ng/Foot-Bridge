import { style } from "@vanilla-extract/css"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const matchInfoContainer = style({
  display: "flex",
  flexDirection: "column",
  padding: `${spacing[4]} 0`,
  gap: spacing[1],
  borderBottom: `2px solid ${colorVars.neutral.light[200]}`,
})

export const matchInfoDate = style({
  ...typography.body.lg,
  fontWeight: 500,
})

export const matchInfoFieldName = style({
  ...typography.heading["2xl"],
  fontWeight: 600,
})

export const matchInfoMatchFormat = style({
  ...typography.body.lg,
  fontWeight: 500,
})

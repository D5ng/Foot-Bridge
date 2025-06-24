import { style } from "@vanilla-extract/css"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const matchDetailCard = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[2.5],
  padding: `${spacing[4]} 0`,
  borderBottom: `2px solid ${colorVars.neutral.light[200]}`,
})

export const matchDetailCardTitle = style({
  ...typography.heading.xl,
  fontWeight: 600,
})

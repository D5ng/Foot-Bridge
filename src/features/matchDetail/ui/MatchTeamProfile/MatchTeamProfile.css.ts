import { style } from "@vanilla-extract/css"
import { spacing, typography } from "@/shared/tokens"

export const matchTeamProfileTitle = style({
  ...typography.heading.xl,
  fontWeight: 600,
})

export const matchTeamProfileList = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[2.5],
  ...typography.body.md,
})

export const matchTeamProfileItem = style({
  display: "inline-flex",
  justifyContent: "space-between",
  alignItems: "center",
})

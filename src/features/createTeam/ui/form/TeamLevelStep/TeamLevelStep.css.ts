import { style } from "@vanilla-extract/css"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const skillLevelStepDescription = style({
  ...typography.body.md,
})

export const skillLevelStepDetails = style({
  display: "flex",
  flexDirection: "column",
  ...typography.body.sm,
})

export const skillLevelStepDetailItem = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[1],
  padding: `${spacing[4]} 0`,
  borderBottom: `1px solid ${colorVars.neutral.light[200]}`,
})

export const skillLevelStepDetailItemLabel = style({
  fontWeight: 500,
})

export const skillLevelStepDetailItemValue = style({
  color: colorVars.neutral.dark[700],
})

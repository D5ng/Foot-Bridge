import { style } from "@vanilla-extract/css"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const matchRequestContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[4],
  padding: `0 ${spacing[4]}`,
})

export const matchRequestItemContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[4],
  backgroundColor: colorVars.highlight[50],
  borderRadius: spacing[4],
  padding: spacing[4],
})

export const matchRequestItemList = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[1],
  ...typography.body.md,
})

export const matchRequestItem = style({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing[1],
})

export const matchRequestItemValue = style({
  fontWeight: 500,
})

export const matchRequestButtonContainer = style({
  display: "flex",
  gap: spacing[2],
})

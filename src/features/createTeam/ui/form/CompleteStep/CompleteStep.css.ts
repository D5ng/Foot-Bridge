import { style } from "@vanilla-extract/css"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const completeEmblemWrapper = style({
  width: "96px",
  height: "96px",
  borderRadius: "50%",
  overflow: "hidden",
  margin: `${spacing[4]} auto`,
})

export const completeInfoList = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[3],
  padding: `${spacing[6]} 0`,
  borderBottom: `2px solid ${colorVars.neutral.light[200]}`,
})

export const completeInfoItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ...typography.body.md,
})

export const completeInfoItemLabel = style({
  width: "30%",
})

export const completeInfoItemValue = style({
  width: "70%",
  fontWeight: 500,
  textAlign: "right",
})

export const completeInfoNotice = style({
  color: colorVars.neutral.dark[700],
  ...typography.body.md,
  margin: `${spacing[4]} 0`,
})

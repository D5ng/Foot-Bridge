import { style } from "@vanilla-extract/css"
import { colorVars, spacing } from "@/shared/tokens"

export const skeletonItemLayout = style({
  display: "flex",
  alignItems: "center",
  gap: spacing[2.5],
  padding: spacing[4],
  borderBottom: `1px solid ${colorVars.neutral.light[200]}`,
})

export const skeletonItemInfo = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: spacing[1],
})

export const skeletonItemRight = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[1],
})

export const skeletonItemTag = style({
  display: "flex",
  alignItems: "center",
  gap: spacing[1],
})

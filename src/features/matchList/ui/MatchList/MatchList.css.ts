import { style } from "@vanilla-extract/css"
import { spacing, typography } from "@/shared/tokens"

export const layout = style({
  display: "flex",
  flexDirection: "column",
})

export const emptyMatchListContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: `0 ${spacing[4]}`,
  gap: spacing[4],
})

export const emptyMatchListText = style({
  ...typography.heading.md,
})

export const emptyMatchListButton = style({
  // borderRadius: radius.full,
  height: spacing[10],
  width: "40%",
})

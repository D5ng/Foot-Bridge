import { style } from "@vanilla-extract/css"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const formLayoutButtonLayout = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[2.5],
  marginTop: spacing[12],
})

export const formLayoutHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[1],
})

export const formLayoutHeaderTitle = style({
  ...typography.heading.xl,
})

export const formLayoutHeaderDescription = style({
  ...typography.body.md,
  color: colorVars.neutral.dark[500],
})

export const formLayoutRoot = style({
  marginTop: spacing[4],
  padding: `0 ${spacing[4]}`,
})

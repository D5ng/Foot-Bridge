import { style } from "@vanilla-extract/css"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const formButtonLayout = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[2.5],
  marginTop: spacing[12],
})

export const formHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[1],
})

export const formHeaderTitle = style({
  ...typography.heading.xl,
})

export const formHeaderDescription = style({
  ...typography.body.md,
  color: colorVars.neutral.dark[500],
})

export const formRootLayout = style({
  marginTop: spacing[4],
  padding: `0 ${spacing[4]}`,
})

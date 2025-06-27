import { style } from "@vanilla-extract/css"
import { spacing, typography } from "@/shared/tokens"

export const errorFallbackContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[2.5],
})

export const errorFallbackTitle = style({
  ...typography.heading.lg,
})

export const errorFallbackMessage = style({
  ...typography.body.md,
})

export const errorFallbackChildrenContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[2.5],
})

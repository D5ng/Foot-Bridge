import { style } from "@vanilla-extract/css"
import { typography } from "@/shared/tokens"

export const matchDetailRequestCount = style({
  ...typography.body.md,
})

export const matchDetailRequestCountValue = style({
  ...typography.heading.md,
  fontWeight: 600,
})

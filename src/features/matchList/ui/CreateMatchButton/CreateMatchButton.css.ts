import { style } from "@vanilla-extract/css"
import { radius, spacing, typography } from "@/shared/tokens"

export const createMatchButton = style({
  position: "fixed",
  right: spacing[8],
  bottom: spacing[8],
  height: "48px",
  padding: `${spacing[2]} ${spacing[4]}`,
  borderRadius: radius.full,
  width: "auto",
  ...typography.body.md,
  fontWeight: 500,
})

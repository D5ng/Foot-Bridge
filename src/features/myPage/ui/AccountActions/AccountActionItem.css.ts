import { style } from "@vanilla-extract/css"
import { colorVars, spacing } from "@/shared/tokens"

export const accountActionItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: spacing[4],
  borderBottom: `1px solid ${colorVars.neutral.light[300]}`,
  cursor: "pointer",
  width: "100%",
})

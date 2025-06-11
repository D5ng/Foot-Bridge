import { style } from "@vanilla-extract/css"
import { spacing, typography } from "@/shared/tokens"

export const header = style({
  display: "flex",
  padding: spacing[4],
  justifyContent: "space-between",
  alignItems: "center",
})

export const headerLogo = style({
  ...typography.heading.xl,
})

export const headerMenu = style({
  display: "flex",
  alignItems: "center",
  gap: spacing[2.5],
})

export const authButton = style({
  ...typography.body.sm,
  padding: `${spacing[1]} ${spacing[2]}`,
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#fff",
  cursor: "pointer",
  textDecoration: "none",
  color: "#333",

  ":hover": {
    backgroundColor: "#f5f5f5",
  },
})

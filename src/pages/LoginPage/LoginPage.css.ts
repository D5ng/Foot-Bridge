import { style } from "@vanilla-extract/css"
import { colorVars, radius, spacing, typography } from "@/shared/tokens"

export const loginPageWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: `70px ${spacing[4]} 0`,
})

export const loginPageTitle = style({
  ...typography.heading.xl,
})

export const loginPageDesc = style({
  ...typography.body.lg,
  color: colorVars.neutral.dark[600],
  fontWeight: 700,
})

export const loginPageButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: spacing[4],
  marginTop: "50px",
  backgroundColor: "#FEE500",
  padding: spacing[4],
  borderRadius: radius.lg,
})

export const loginPageButtonIcon = style({
  position: "relative",
  width: "24px",
  height: "24px",
})

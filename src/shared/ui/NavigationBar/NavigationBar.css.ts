import { style } from "@vanilla-extract/css"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const navigationBar = style({
  padding: `${spacing[6]} ${spacing[4.5]}`,
  backgroundColor: colorVars.neutral.light[50],
})

export const navigationBarWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
})

export const navigationBarBackButton = style({
  position: "absolute",
  left: 0,
  top: "50%",
  transform: "translateY(-50%)",
})

export const navigationBarTitle = style({
  ...typography.heading.md,
})

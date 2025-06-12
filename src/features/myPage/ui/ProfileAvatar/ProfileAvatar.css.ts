import { style } from "@vanilla-extract/css"
import { colorVars, radius, spacing, typography } from "@/shared/tokens"

export const profileAvatarWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: spacing[4],
  padding: `${spacing[2]}`,
})

export const profileAvatar = style({
  width: "82px",
  height: "82px",
  position: "relative",
})

export const profileAvatarImage = style({
  width: "100%",
  height: "100%",
  borderRadius: radius["3xl"],
})

export const profileAvatarEditIcon = style({
  position: "absolute",
  bottom: 0,
  right: 0,
  borderRadius: radius.full,
  backgroundColor: colorVars.highlight[500],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
})

export const profileAvatarEditIconImage = style({
  width: "14px",
  height: "14px",
})

export const profileAvatarNameWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[1],
})

export const profileAvatarName = style({
  ...typography.heading.lg,
})

export const profileAvatarEmail = style({
  ...typography.body.sm,
  color: colorVars.neutral.dark[600],
})

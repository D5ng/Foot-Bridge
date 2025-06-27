import { style } from "@vanilla-extract/css"
import { colorVars, spacing } from "@/shared/tokens"

export const createTeamErrorFallbackContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: `0 ${spacing[4]}`,
})

export const createTeamErrorFallbackSection = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: spacing[4],
  gap: spacing[2],
  backgroundColor: colorVars.highlight[50],
  borderRadius: spacing[4],
})

export const createTeamErrorFallbackLottieWrapper = style({
  width: "80%",
  margin: "0 auto",
})

export const createTeamErrorFallbackButtonWrapper = style({
  paddingTop: spacing[4],
})

export const createTeamErrorFallbackButton = style({
  height: spacing[10],
})

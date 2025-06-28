import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const noTeamFallbackContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: `0 ${spacing[4]}`,
})

export const noTeamFallbackSection = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: spacing[4],
  gap: spacing[2],
  borderRadius: spacing[4],
})

export const noTeamFallbackLottieWrapper = style({
  width: "80%",
  margin: "0 auto",
})

export const noTeamFallbackButtonWrapper = style({
  paddingTop: spacing[4],
  display: "flex",
  flexDirection: "column",
  gap: spacing[2],
})

export const noTeamFallbackButton = style({
  height: spacing[10],
})

import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const createTeamSkeletonContainer = style({
  margin: `0 ${spacing[4]}`,
})

export const createTeamSkeletonForm = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[4],
  padding: spacing[4],
})

export const createTeamSkeletonFormSection = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[2],
})

export const createTeamSkeletonHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[2],
})

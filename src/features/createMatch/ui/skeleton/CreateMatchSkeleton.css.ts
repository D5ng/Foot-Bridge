import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const createMatchSkeletonContainer = style({
  margin: `0 ${spacing[4]}`,
})

export const createMatchSkeletonForm = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[4],
  padding: spacing[4],
})

export const createMatchSkeletonFormSection = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[2],
})

export const createMatchSkeletonHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[2],
})

export const createMatchSkeletonCalendar = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: spacing[1],
  marginBottom: spacing[3],
})

export const createMatchSkeletonTimeOptions = style({
  display: "flex",
  flexWrap: "wrap",
  gap: spacing[2],
})

export const createMatchSkeletonTimeOption = style({
  width: "60px",
  height: "32px",
  borderRadius: "16px",
})

export const createMatchSkeletonFieldWrapper = style({
  padding: `${spacing[4]} 0`,
})

import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const createMatchFormLayout = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[4],
})

export const noDefaultPadding = style({
  paddingLeft: 0,
  paddingRight: 0,
})

export const createMatchTimeOptionsWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  gap: spacing[2],
})

export const createMatchFieldWrapper = style({
  padding: `${spacing[4]} 0`,
})

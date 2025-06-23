import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

export const completeAnimation = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80%",
  margin: `0 auto`,
  padding: `${spacing[4]} 0`,
})

export const completeInfoNotice = style({
  marginTop: spacing[4],
})

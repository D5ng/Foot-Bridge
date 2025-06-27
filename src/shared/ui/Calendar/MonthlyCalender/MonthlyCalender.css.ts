import { style } from "@vanilla-extract/css"
import { spacing } from "@/shared/tokens"

//  Swiper Container Class
export const swiperContainer = style({
  padding: spacing[4],
})

// Swiper Wrapper Class
export const swiperWrapper = style({
  display: "flex",
  gap: spacing[1],
})

export const dayCellSlide = style({
  width: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

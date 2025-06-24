import { style } from "@vanilla-extract/css"
import { colorVars } from "@/shared/tokens"

export const swiperThumbnailContainer = style({
  backgroundColor: colorVars.highlight[100],
  height: "280px",
  overflow: "hidden",
})

export const swiperThumbnailWrapper = style({
  display: "flex",
  width: "100%",
  height: "100%",
})

export const swiperThumbnailSlide = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  flexShrink: 0,
})

export const thumbnailWrapper = style({})

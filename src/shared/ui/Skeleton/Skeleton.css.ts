import { style, keyframes } from "@vanilla-extract/css"
import { colorVars } from "@/shared/tokens"

// 그라데이션 쉬머 애니메이션 정의 - 더 부드러운 버전
const shimmer = keyframes({
  "0%": {
    backgroundPosition: "-400px 0",
  },
  "100%": {
    backgroundPosition: "400px 0",
  },
})

// 스켈레톤 기본 스타일
const baseSkeletonStyles = {
  background: `linear-gradient(
    90deg,
    ${colorVars.neutral.light[300]} 0px,
    ${colorVars.neutral.light[200]} 100px,
    ${colorVars.neutral.light[300]} 200px
  )`,
  backgroundSize: "400px 100%",
  animation: `${shimmer} 2s linear infinite`,
  borderRadius: "4px",
}

// 다양한 크기의 스켈레톤
export const skeletonText = style({
  height: "16px",
  width: "100%",
  ...baseSkeletonStyles,
})

export const skeletonTitle = style({
  height: "24px",
  width: "100%",
  ...baseSkeletonStyles,
})

export const skeletonInput = style({
  height: "48px",
  width: "100%",
  ...baseSkeletonStyles,
})

export const skeletonTextarea = style({
  height: "80px",
  width: "100%",
  ...baseSkeletonStyles,
})

export const skeletonButton = style({
  height: "48px",
  width: "100%",
  ...baseSkeletonStyles,
})

export const skeletonAvatar = style({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: `linear-gradient(
    90deg,
    ${colorVars.neutral.light[300]} 0px,
    ${colorVars.neutral.light[200]} 100px,
    ${colorVars.neutral.light[300]} 200px
  )`,
  backgroundSize: "400px 100%",
  animation: `${shimmer} 2s linear infinite`,
})

export const skeletonCard = style({
  height: "120px",
  width: "100%",
  borderRadius: "8px",
  background: `linear-gradient(
    90deg,
    ${colorVars.neutral.light[300]} 0px,
    ${colorVars.neutral.light[200]} 100px,
    ${colorVars.neutral.light[300]} 200px
  )`,
  backgroundSize: "400px 100%",
  animation: `${shimmer} 2s linear infinite`,
})

// 기본 스켈레톤 (export용)
export const skeletonBase = style(baseSkeletonStyles)

import { style } from "@vanilla-extract/css"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const mathItemlayout = style({
  display: "flex",
  alignItems: "center",
  gap: spacing[2.5],
  padding: spacing[4],
  borderBottom: `1px solid ${colorVars.neutral.light[200]}`,
})

export const matchItemInfo = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})

export const matchItemTime = style({
  ...typography.heading.xl,
})

export const matchItemTitle = style({
  ...typography.body.lg,
  fontWeight: 500,
})

export const matchItemBadge = style({
  width: "70px",
})

export const matchItemTag = style({
  display: "flex",
  alignItems: "center",
  ...typography.body.sm,
  color: colorVars.neutral.dark[600],
})

export const matchItemTagItem = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: spacing[1],
  selectors: {
    "&:not(:last-child)::after": {
      content: "•",
      color: colorVars.neutral.dark[500],
      padding: "0 3px",
    },
  },
})

export const matchItemRight = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing[1],
})

export const matchItemTagItemImage = style({
  width: "16px",
  height: "16px",
})

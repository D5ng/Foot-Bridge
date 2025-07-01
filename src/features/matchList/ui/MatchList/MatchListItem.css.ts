import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { colorVars, spacing, typography } from "@/shared/tokens"

export const matchItemlayout = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: spacing[2.5],
    padding: spacing[4],
    borderBottom: `1px solid ${colorVars.neutral.light[200]}`,
  },
  variants: {
    status: {
      pending: {
        opacity: 1,
      },
      confirmed: {
        opacity: 0.3,
      },
      cancelled: {
        opacity: 0.3,
      },
    },
  },
  defaultVariants: {
    status: "pending",
  },
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

export const matchItemText = recipe({
  variants: {
    status: {
      pending: {},
      confirmed: { color: colorVars.neutral.dark[500], opacity: 0.5 },
      cancelled: { color: colorVars.neutral.dark[500], opacity: 0.5 },
    },
  },
  defaultVariants: { status: "pending" },
})

export const matchItemBadgeStyle = recipe({
  variants: {
    status: {
      pending: {},
      confirmed: { color: colorVars.neutral.dark[500] },
      cancelled: { color: colorVars.neutral.dark[500] },
    },
  },
  defaultVariants: { status: "pending" },
})

export const matchItemImageStyle = recipe({
  variants: {
    status: {
      pending: {},
      confirmed: { opacity: 0.5 },
      cancelled: { opacity: 0.5 },
    },
  },
  defaultVariants: { status: "pending" },
})

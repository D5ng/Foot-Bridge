import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { colorVars, radius, spacing, typography } from "@/shared/tokens"

export const segmentedControl = recipe({
  variants: {},
})

export const segmentedControlWrapper = style({
  padding: spacing[1],
  backgroundColor: colorVars.neutral.light[100],
  borderRadius: radius["2xl"],
  maxWidth: "332px",
  ...typography.heading.sm,
})

export const segmentedControlList = style({
  display: "flex",
  alignItems: "center",
})

export const segmentedControlOption = style({
  flex: 1,
  textAlign: "center",
  padding: `${spacing[2]} ${spacing[3.5]}`,
  position: "relative",
  selectors: {
    "&.selected": {
      backgroundColor: colorVars.neutral.light[50],
      borderRadius: radius.xl,
    },

    "&:not(.selected)": {
      color: colorVars.neutral.dark[600],
    },

    "&:after": {
      content: "",
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
      width: "1px",
      height: "10px",
      backgroundColor: colorVars.neutral.light[400],
    },

    "&:last-child:after": {
      display: "none",
    },
  },
})

export const segmentedContent = style({})

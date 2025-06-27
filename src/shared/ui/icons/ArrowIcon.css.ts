import { recipe, type RecipeVariants } from "@vanilla-extract/recipes"

export const arrowIcon = recipe({
  base: {},
  variants: {
    direction: {
      left: {
        transform: "rotate(180deg)",
      },
      right: {
        transform: "rotate(0deg)",
      },
      up: {
        transform: "rotate(90deg)",
      },
      down: {
        transform: "rotate(270deg)",
      },
    },
  },
  defaultVariants: {
    direction: "right",
  },
})

export type ArrowIconType = NonNullable<RecipeVariants<typeof arrowIcon>>

import { recipe, type RecipeVariants } from "@vanilla-extract/recipes"

export const arrowIcon = recipe({
  base: {
    display: "block",
    transition: "transform 0.3s ease-in-out",
  },
  variants: {
    direction: {
      left: {
        transform: "rotate(180deg)",
      },
      right: {
        transform: "rotate(0deg)",
      },
      up: {
        transform: "rotate(270deg)",
      },
      down: {
        transform: "rotate(90deg)",
      },
    },
  },
  defaultVariants: {
    direction: "right",
  },
})

export type ArrowIconType = NonNullable<RecipeVariants<typeof arrowIcon>>

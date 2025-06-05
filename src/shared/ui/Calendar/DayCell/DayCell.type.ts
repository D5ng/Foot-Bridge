import type { RecipeVariants } from "@vanilla-extract/recipes"
import type { dayCell } from "./DayCell.css"

export type DayCellVariants = NonNullable<RecipeVariants<typeof dayCell>>

export type DayCellVariantType = NonNullable<DayCellVariants["variant"]>

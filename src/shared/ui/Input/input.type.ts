import { type RecipeVariants } from "@vanilla-extract/recipes"
import { input } from "./Input.css"

export type InputVariants = NonNullable<RecipeVariants<typeof input>>

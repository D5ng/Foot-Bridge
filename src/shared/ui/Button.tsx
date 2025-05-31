import type { ButtonHTMLAttributes } from "react"
import { Slot, Slottable } from "../lib"
import { type RecipeVariants } from "@vanilla-extract/recipes"
import { button } from "./Button.css"

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  asChild?: boolean
}

export default function Button({ children, asChild, variant = "primary", ...restProps }: Props) {
  const Element = asChild ? Slot : "button"
  return (
    <Element className={button({ variant })} {...restProps}>
      <Slottable>{children}</Slottable>
    </Element>
  )
}
